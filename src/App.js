
import DemoHookUseState from "./React_Hooks/UseState/DemoHookUseState";
import DemoHookUseEffect from "./React_Hooks/UseEffect/DemoHookUseEffect";
import DemoHookUseCallback from "./React_Hooks/UseCallBack/DemoHookUseCallback";
import DemoHookUseMemo from "./React_Hooks/UseMemo/DemoHookUseMemo";
import DemoHookUseRef from "./React_Hooks/UseRef/DemoHookUseRef";
import DemoHookUseReducer from "./React_Hooks/UseReducer/DemoHookUseReducer";
import DemoHookUseContext from "./React_Hooks/UseContext/DemoHookUseContext";
import Contextprovider from "./React_Hooks/Context/Contextprovider";
import DemoReduxApp from "./React_Hooks/BaiTapReduxApp/DemoReduxApp";

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
      <DemoReduxApp />
    </Contextprovider>
  );
}

export default App;
