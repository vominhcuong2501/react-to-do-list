import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import * as reducers from "./Reducer";

// redux saga
import reduxThunk from "redux-thunk";

// middleware saga
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
const middleWareSaga = createMiddleWareSaga();

// Object Literals
const rootReducer = combineReducers({
  ...reducers,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk,middleWareSaga),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
middleWareSaga.run(rootSaga);

export {store}

