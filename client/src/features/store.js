import { createStore } from "redux";
import financeReducer from "./actions/finance.reducer";

const store = createStore(
  financeReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
