import React, { Component } from "react";
import "./todolist.css";
import axios from "axios";
export default class TodoListRCC extends Component {
  state = {
    taskList: [],
    values: {
      taskName: "",
    },
    errors: {
      taskName: "",
    },
  };

  getTaskList = () => {
    let promise = axios({
      url: "https://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    });
    promise
      .then((result) => {
        console.log(result.data);
        // nếu goi api thành công => set lại state của component
        this.setState({
          taskList: result.data,
        });
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  renderTabTodo = () => {
    return this.state.taskList
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
                  this.deleteTask(ele.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                className="complete"
                type="button"
                onClick={() => {
                  this.doneTask(ele.taskName);
                }}
              >
                <i className="far fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };

  renderTaskTodoDone = () => {
    return this.state.taskList
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
                  this.deleteTask(ele.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button onClick={() => {this.rejectTask(ele.taskName)}} className="complete" type="button">
                <i className="fas fa-undo" />
              </button>
            </div>
          </li>
        );
      });
  };

  // hàm sẽ tự động thực thi sai khi nội dung component được render
  componentDidMount() {
    this.getTaskList();
  }

  // thêm task
  addTask = (e) => {
    // sự kiện submit form reload lại trang
    e.preventDefault();
    console.log(this.state.values.taskName);
    let promise = axios({
      url: "https://svcy.myclass.vn/api/ToDoList/AddTask",
      method: "POST",
      data: { taskName: this.state.values.taskName },
    });
    promise
      .then((result) => {
        console.log(result.data);
        this.getTaskList();
      })
      .catch((errors) => {
        console.log(errors);
      });

    this.setState({
      ...this.state,
      values: {
        taskName: ''
      }
    })
  };

  // xóa task
  deleteTask = (taskName) => {
    let promise = axios({
      url: `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
    promise
      .then((result) => {
        console.log(result.data);
        this.getTaskList();
      })
      .catch((errors) => {
        console.log(errors.response.data);
      });
  };

  // done task
  doneTask = (taskName) => {
    let promise = axios({
      url: ` https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    });
    promise
      .then((result) => {
        console.log(result.data);
        this.getTaskList();
      })
      .catch((errors) => {
        console.log(errors.response.data);
      });
  };

  // reject task 
  rejectTask = (taskName) => {
    let promise = axios({
      url: `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: 'PUT'
    })
    promise.then(result => {
      console.log(result);
      this.getTaskList()
    }).catch(errors => {
      console.log(errors.response.data);
    })
  }

  // xét validate cho ô input
  handleChange = (e) => {
    const { value, name, title } = e.target;
    let newValues = { ...this.state.values };
    newValues = { ...newValues, [name]: value };

    let newErrors = { ...this.state.errors };
    let regexString = /^[a-z A-Z]+$/;
    if (!regexString.test(value) || value.trim() === "") {
      newErrors[name] = title + " invalid !";
    } else {
      newErrors[name] = "";
    }

    this.setState({
      ...this.state,
      values: newValues,
      errors: newErrors,
    });
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
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
                  name="taskName"
                  id="newTask"
                  type="text"
                  placeholder="Enter an activity..."
                  onChange={this.handleChange}
                  title="Taskname"
                />

                <button id="addItem">
                  <i className="fa fa-plus" />
                </button>
              </div>
              <p className="text-danger">{this.state.errors.taskName}</p>
              <div className="card__todo">
                {/* Uncompleted tasks */}
                <ul className="todo" id="todo">
                  {this.renderTabTodo()}
                </ul>
                {/* Completed tasks */}
                <ul className="todo" id="completed">
                  {this.renderTaskTodoDone()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
