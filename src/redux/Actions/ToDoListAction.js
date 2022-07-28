import axios from "axios";
import { ADD_TASK_API, GET_TASK_API } from "../Types/ToDoListConst";

// action có 2 loại:
// action thực thi ngay làm thay đổi reducer (action 1)
// action phải thực hiện xử lý rồi mới gọi action 1 thực thi (async action)
// nhược diểm của async phải đợi nó xử lý xong mới dispatch 

const getTaskListApi = () => {
  // tiền xử lý dữ liệu => xử lý function
  return async (dispatch) => {
    let result = await axios.get(
      "https://svcy.myclass.vn/api/ToDoList/GetAllTask"
    );

    dispatch({
      type: GET_TASK_API,
      payload: result.data,
    });
  };
};

const addTaskApi = (taskName) => {
  return async (dispatch) => {
    try {
      let { data, status } = await axios({
        url: "https://svcy.myclass.vn/api/ToDoList/AddTask",
        method: "POST",
        data: { taskName: taskName },
      });
      if (status === 200) {
        dispatch(getTaskListApi());
      }
    } catch (error) {
      console.log(error.data);
    }
  };
  //   return (dispatch) => {
  //     let promise = axios({
  //       url: "https://svcy.myclass.vn/api/ToDoList/AddTask",
  //       method: "POST",
  //       data: { taskName: taskName },
  //     });
  //     promise
  //       .then((result) => {
  //         dispatch(getTaskListApi());
  //       })
  //       .catch((errors) => {
  //         console.log(errors);
  //       });
  //   };
};

const deleteTaskApi = (taskName) => {
  return (dispatch) => {
    let promise = axios({
      url: `https://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
    promise
      .then((result) => {
        dispatch(getTaskListApi());
      })
      .catch((errors) => {
        console.log(errors.response.data);
      });
  };
};

const doneTaskApi = (taskName) => {
  return (dispatch) => {
    let promise = axios({
      url: ` https://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    });
    promise
      .then((result) => {
        dispatch(getTaskListApi());
      })
      .catch((errors) => {
        console.log(errors.response.data);
      });
  };
};

const rejectTaskApi = (taskName) => {
  return (dispatch) => {
    let promise = axios({
      url: `https://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    });
    promise
      .then((result) => {
        dispatch(getTaskListApi());
      })
      .catch((errors) => {
        console.log(errors.response.data);
      });
  };
};

export {
  getTaskListApi,
  addTaskApi,
  deleteTaskApi,
  doneTaskApi,
  rejectTaskApi,
};
