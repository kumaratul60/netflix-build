import { Provider } from "react-redux";
import Body from "./app/appBody";
import appStore from "./utils/store/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
