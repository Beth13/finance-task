import Header from "./features/components/Header";
import Main from "./features/components/Main";
import { Provider } from "react-redux";

import "./App.css";
import store from "./features/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
