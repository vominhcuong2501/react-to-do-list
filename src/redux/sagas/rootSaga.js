import { all } from "redux-saga/effects";
import * as ToDoListSaga from "./ToDoListSaga";
// import { theoDoiActionGetTaskApi } from "./ToDoListSaga";

export function* rootSaga() {
  yield all([
    // nghiệp vụ theo dõi các action saga todolist
    ToDoListSaga.theoDoiActionGetTaskApi(),
    ToDoListSaga.theoDoiActionAddTaskApi(),
    ToDoListSaga.theoDoiActionDoneTaskApi(),
    ToDoListSaga.theoDoiActionRejectTaskApi(),
    ToDoListSaga.theoDoiActionDeleteTaskApi()    
  ]);
}
