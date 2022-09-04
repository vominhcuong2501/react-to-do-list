// import DemoHookUseState from "./React_Hooks/UseState/DemoHookUseState";
// import DemoHookUseEffect from "./React_Hooks/UseEffect/DemoHookUseEffect";
// import DemoHookUseCallback from "./React_Hooks/UseCallBack/DemoHookUseCallback";
// import DemoHookUseMemo from "./React_Hooks/UseMemo/DemoHookUseMemo";
// import DemoHookUseRef from "./React_Hooks/UseRef/DemoHookUseRef";
// import DemoHookUseReducer from "./React_Hooks/UseReducer/DemoHookUseReducer";
// import DemoHookUseContext from "./React_Hooks/UseContext/DemoHookUseContext";
// import Contextprovider from "./React_Hooks/Context/Contextprovider";
// import DemoReduxApp from "./React_Hooks/BaiTapReduxApp/DemoReduxApp";
// import DemoUseSpring from "./React_Hooks/ReactSpring/DemoUseSpring";
// import Ex2UseSpring from "./React_Hooks/ReactSpring/Ex2UseSpring";
// import Ex3UseSpring from "./React_Hooks/ReactSpring/Ex3UseSpring";
// import Ex4UseTrail from "./React_Hooks/ReactSpring/Ex4UseTrail";
// import Ex5UseTransition from "./React_Hooks/ReactSpring/Ex5UseTransition";
// import Ex6UseChain from "./React_Hooks/ReactSpring/Ex6UseChain";
import { BrowserRouter, Route, Routes, Navigate, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Header from "./components/Home/Header/Header";
import Login from "./pages/Login/Login"
import TodoListRCC from "./pages/TodoList/todolist-RCC";
import TodoListRFC from "./pages/TodoList/todolist-RFC";
import ToDoListRedux from "./pages/TodoList/ToDoListRedux";
import BaiTapToDoListSaga from "./pages/BaiTapToDoListSaga/BaiTapToDoListSaga";
import Loading from "./components/GlobalSetting/LoadingComponent/Loading";
import DemoDragdrop from "./pages/demo-dragdrop/demo-dragdrop";
import DragAndDropDnD from "./pages/DragAndDropDnD/DragAndDropDnD";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Loading />
      <Routes>
        <Route path="/" element={<Navigate to='/home'/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todolistrcc" element={<TodoListRCC />} />
        <Route path="/todolistrfc" element={<TodoListRFC />} />
        <Route path="/todolistredux" element={<ToDoListRedux />} />
        <Route path="/todolistsaga" element={<BaiTapToDoListSaga />} />
        <Route path="/demoDragDrop" element={<DemoDragdrop />} />
        <Route path="/DragAndDropDnD" element={<DragAndDropDnD />} />



      </Routes>
      {/* <Contextprovider className="App"> */}
      {/* HOOK */}
      {/* <DemoHookUseState /> */}
      {/* <DemoHookUseEffect /> */}
      {/* <DemoHookUseCallback /> */}
      {/* <DemoHookUseMemo /> */}
      {/* <DemoHookUseRef /> */}
      {/* <DemoHookUseReducer /> */}
      {/* <DemoHookUseContext /> */}
      {/* <DemoReduxApp /> */}
      {/* <DemoUseSpring /> */}
      {/* <Ex2UseSpring /> */}
      {/* <Ex3UseSpring /> */}
      {/* <Ex4UseTrail /> */}
      {/* <Ex5UseTransition /> */}
      {/* <Ex6UseChain /> */}
      {/* </Contextprovider> */}
    </BrowserRouter>
  );
}

export default App;
