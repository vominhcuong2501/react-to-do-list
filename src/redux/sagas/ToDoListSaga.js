/**
 * 28/07/2022 Cường viết chức năng getTask
 * Action saga lấy danh sách task từ Api
 */

import {
  fork,
  take,
  takeEvery,
  takeLatest,
  delay,
  call,
  put,
} from "redux-saga/effects";
import {
  ADD_TASK_SAGA_API,
  DELETE_TASK_SAGA_API,
  DONE_TASK_SAGA_API,
  GET_TASK_API,
  GET_TASK_LIST_SAGA_API,
  REJECT_TASK_SAGA_API,
} from "../Types/ToDoListConst";
import { toDoListService } from "../../services/ToDoListService";
import { STATUS_CODE } from "../../constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../Types/LoadingConst";

// redux có 2 loại action:
// Loại 1: action => object (action thường)
// Loại 2: action => function (thường dùng để xử lý api hoặc gọi các action khác)

// Cách 1:
// function* getTaskApi() {
//   // take: theo dõi chặn các action -> xem action nào dispatch thì mới làm các công việc bên dưới => hạn chế chỉ gọi được 1 lần nên đặt trong vòng lặp vô tận
//   while (true) {
//     yield take("getTaskApiAction");
//     console.log("getTaskApi");
//   // call api dispatch le reducer...
//   }
// }

// export function* rootSaga() {
//     // fork: non-blocking chạy tất cả function của saga không cần chờ
//   yield fork(getTaskApi);
//   yield fork(getTaskApi);
//   yield fork(getTaskApi);
// }

// Cách 2:
// function* getTaskApi(action) {
//     // thời gian trả kết quả sau khi dispatch
//     yield delay(3000)
//     console.log('getTaskApi', action);
// }

// export function* rootSaga() {
//     // mỗi lần dispatch sẽ trả về kết quả nhưng bị bất đồng bộ
//     yield takeEvery('getTaskApiAction', getTaskApi)
//     // trả về thằng dispatch cuối cùng
//     yield takeLatest('getTaskApiAction', getTaskApi)
// }

function* getTaskApiAction(action) {
  // put: giống dispatch action
  yield put({
    type: DISPLAY_LOADING,
  });

  try {
    // call: call api nhận hàm trả về promise
    let result = yield call(toDoListService.getTaskApi);

    // thời gian hiện thị loading trước khi nhân được dữ liệu
    yield delay(500);

    if (result.status === STATUS_CODE.SUCCESS) {
      // khi lấy giá trị thành công dùng put gửi qua reducer (giống dispatch bên redux-thunk)
      yield put({
        type: GET_TASK_API,
        payload: result.data,
      });
    } else {
      console.log("Error");
    }
  } catch (error) {
    console.log(error);
  }

  // put: giống dispatch action
  yield put({
    type: HIDE_LOADING,
  });
}

export function* theoDoiActionGetTaskApi() {
  // takeLatest: lắng nghe action và trả về thằng dispatch cuối cùng
  yield takeLatest(GET_TASK_LIST_SAGA_API, getTaskApiAction);
}

// Thêm task
function* addTaskApiAction(action) {
  const { taskName } = action;
  // gọi api
  try {
    const result = yield call(() => {
      return toDoListService.addTaskApi(taskName);
    });

    // hiển thị loading
    // thành công thì load lại task = cách gọi lại action saga load tasklist
    if (result.status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASK_LIST_SAGA_API,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
export function* theoDoiActionAddTaskApi() {
  yield takeLatest(ADD_TASK_SAGA_API, addTaskApiAction);
}

// Xóa task
function* deleteTaskApiAction(action) {
  const { taskName } = action;
  try {
    const result = yield call(() => {
      return toDoListService.deleteTaskApi(taskName);
    });

    if (result.status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASK_LIST_SAGA_API,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
export function* theoDoiActionDeleteTaskApi() {
  yield takeLatest(DELETE_TASK_SAGA_API, deleteTaskApiAction);
}

// hoàn thành task
function* doneTaskApiAction(action) {
  const { taskName } = action;
  try {
    const result = yield call(() => {
      return toDoListService.doneTaskApi(taskName);
    });

    if (result.status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASK_LIST_SAGA_API,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
export function* theoDoiActionDoneTaskApi() {
  yield takeLatest(DONE_TASK_SAGA_API, doneTaskApiAction);
}

// reject task
function* rejectTaskApiAction(action) {
  const { taskName } = action;
  try {
    const result = yield call(() => {
      return toDoListService.rejectTaskApi(taskName);
    });

    if (result.status === STATUS_CODE.SUCCESS) {
      yield put({
        type: GET_TASK_LIST_SAGA_API,
      });
    }
  } catch (error) {
    console.log(error);
  }
}
export function* theoDoiActionRejectTaskApi() {
  yield takeLatest(REJECT_TASK_SAGA_API, rejectTaskApiAction);
}
