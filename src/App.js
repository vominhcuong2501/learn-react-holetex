import CreateRef from "./class-component/CreateRef";
import Form from "./class-component/Form";
import LiftingStateUp from "./class-component/Lifting-state-up";
import RenderCondition from "./class-component/Render-condition";
import CustomeHook from "./hooks/CustomeHook";

import UseId from "./function-component/version18/useId/UseId";
import UseTransition from "./function-component/version18/useTransition/UseTransition";
import UseContext from "./function-component/contextAPI/UseContext";
import Parent from "./maybe-you-do-not-know/useImperativeHandle/Parent";
import app from "./App.css";
import Memo from "./function-component/react-memo/Memo";
import UseEffect from "./function-component/useEffect/UseEffect";
import UseMemo from "./function-component/useMemo/UseMemo";
import UseCallback from "./function-component/useCallback/UseCallback";
import UseRef from "./function-component/useRef/UseRef";
import UseReducer from "./function-component/useReducer/useReducer";
function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      {/* <RenderCondition /> */}
      {/* <LiftingStateUp /> */}
      {/* <CreateRef /> */}
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <Memo /> */}
      {/* <UseRef /> */}
      {/* <UseReducer /> */}
      <CustomeHook />
      {/* <UseId /> */}
      {/* <UseTransition /> */}
      {/* <Parent /> */}
      {/* <UseContext /> */}
    </div>
  );
}

export default App;
