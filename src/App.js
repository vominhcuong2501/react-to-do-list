
import DemoHookUseState from "./React_Hooks/UseState/DemoHookUseState";
import DemoHookUseEffect from "./React_Hooks/UseEffect/DemoHookUseEffect";
import DemoHookUseCallback from "./React_Hooks/UseCallBack/DemoHookUseCallback";
import DemoHookUseMemo from "./React_Hooks/UseMemo/DemoHookUseMemo";
import DemoHookUseRef from "./React_Hooks/UseRef/DemoHookUseRef";
import DemoHookUseReducer from "./React_Hooks/UseReducer/DemoHookUseReducer";
import DemoHookUseContext from "./React_Hooks/UseContext/DemoHookUseContext";
import Contextprovider from "./React_Hooks/Context/Contextprovider";
import DemoReduxApp from "./React_Hooks/BaiTapReduxApp/DemoReduxApp";
import DemoUseSpring from "./React_Hooks/ReactSpring/DemoUseSpring";
import Ex2UseSpring from "./React_Hooks/ReactSpring/Ex2UseSpring";
import Ex3UseSpring from "./React_Hooks/ReactSpring/Ex3UseSpring";
import Ex4UseTrail from "./React_Hooks/ReactSpring/Ex4UseTrail";
import Ex5UseTransition from "./React_Hooks/ReactSpring/Ex5UseTransition";
import Ex6UseChain from "./React_Hooks/ReactSpring/Ex6UseChain";

function App() {
  return (
    <Contextprovider className="App">
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
      <Ex6UseChain />
    </Contextprovider>
  );
}

export default App;
