import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TodoListRFC() {
  let [state, setState] = useState({
    taskList: [],
    values: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  });

  // thay thế cho didMount
  useEffect(() => {
    getTaskList();
    console.log("use");
  }, []);

  const getTaskList = () => {
    console.log("get");
    let promise = axios({
      url: "https://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
    promise
      .then((result) => {
        console.log(result.data);
        // nếu goi api thành công => set lại state của component
        setState({
          ...state,
          taskList: result.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const renderTaskTodo = () => {
    return state.taskList
      .filter((item) => !item.status)
      .map((ele, index) => {
        return (
          <li key={index}>
            <span>{ele.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => {
                  deleteTask(ele.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                className="complete"
                type="button"
                onClick={() => {
                  doneTask(ele.taskName);
                }}
              >
                <i className="far fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };

  const renderTaskTodoDone = () => {
    return state.taskList
      .filter((item) => item.status)
      .map((ele, index) => {
        return (
          <li key={index}>
            <span>{ele.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => {
                  deleteTask(ele.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                onClick={() => {
                  rejectTask(ele.taskName);
                }}
                className="complete"
                type="button"
              >
                <i className="fas fa-undo" />
              </button>
            </div>
          </li>
        );
      });
  };

  // thêm task
  const addTask = (e) => {
    // sự kiện submit form reload lại trang
    e.preventDefault();
    console.log(state.values.taskName);
    let promise = axios({
      url: "https://svcy.myclass.vn/api/ToDoList/AddTask",
      method: "POST",
      data: { taskName: state.values.taskName },
    });
    promise
      .then((result) => {
        console.log(result.data);
        getTaskList();
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  // xóa task
  const deleteTask = (taskName) => {
    let promise = axios({
      url: `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
    promise
      .then((result) => {
        console.log(result.data);
        getTaskList();
      })
      .catch((errors) => {
        console.log(errors.response.data);
      });
  };

  // done task
  const doneTask = (taskName) => {
    let promise = axios({
      url: ` https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    });
    promise
      .then((result) => {
        console.log(result.data);
        getTaskList();
      })
      .catch((errors) => {
        console.log(errors.response.data);
      });
  };

  // reject task
  const rejectTask = (taskName) => {
    let promise = axios({
      url: `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    });
    promise
      .then((result) => {
        console.log(result);
        getTaskList();
      })
      .catch((errors) => {
        console.log(errors.response.data);
      });
  };

  const handleChange = (e) => {
    const { value, name, title } = e.target;
    let newValues = { ...state.values };
    newValues = { ...newValues, [name]: value };

    let newErrors = { ...state.errors };
    let regexString = /^[a-z A-Z]+$/;
    if (!regexString.test(value) || value.trim() === "") {
      newErrors[name] = title + " invalid !";
    } else {
      newErrors[name] = "";
    }

    setState({
      ...state,
      values: newValues,
      errors: newErrors,
    });
  };

  console.log("render");

  return (
    <form onSubmit={addTask}>
      <div className="card">
        <div className="card__header">
          <img src={require("./bgtodolist.png")} />
        </div>
        {/* <h2>hello!</h2> */}
        <div className="card__body">
          <div className="card__content">
            <div className="card__title">
              <h2>My Tasks</h2>
              <p>September 9,2020</p>
            </div>
            <div className="card__add">
              <input
                id="newTask"
                type="text"
                placeholder="Enter an activity..."
                name="taskName"
                onChange={handleChange}
                title="Taskname"
              />
              <button id="addItem">
                <i className="fa fa-plus" />
              </button>
            </div>
            <p className="text-danger">{state.errors.taskName}</p>
            <div className="card__todo">
              {/* Uncompleted tasks */}
              <ul className="todo" id="todo">
                {renderTaskTodo()}
              </ul>
              {/* Completed tasks */}
              <ul className="todo" id="completed">
                {renderTaskTodoDone()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
