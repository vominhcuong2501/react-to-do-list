import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { GET_TASK_API } from "../../redux/Types/ToDoListConst";
import { addTaskApi, deleteTaskApi, doneTaskApi, getTaskListApi, rejectTaskApi } from "../../redux/Actions/ToDoListAction";

export default function ToDoListRedux(props) {
  const { taskList } = useSelector((state) => state.ToDoListReducer);
  const dispatch = useDispatch();
  let [state, setState] = useState({
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
  }, []);

  const getTaskList = () => {
    dispatch(getTaskListApi());
  };

  const renderTaskTodo = () => {
    return taskList
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
    return taskList
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
    dispatch(addTaskApi(state.values.taskName))
  };

  // xóa task
  const deleteTask = (taskName) => {
    dispatch(deleteTaskApi(taskName))
  };

  // done task
  const doneTask = (taskName) => {
    dispatch(doneTaskApi(taskName))
  };

  // reject task
  const rejectTask = (taskName) => {
    dispatch(rejectTaskApi(taskName))
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
