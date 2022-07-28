import { GET_TASK_API } from "../Types/ToDoListConst"

const initialState = {
    taskList: []
}

export const ToDoListReducer = (state = initialState, action) => {
  switch (action.type) {
  case GET_TASK_API:
    state.taskList = action.payload
    return { ...state,}

  default:
    return {...state}
  }
}
