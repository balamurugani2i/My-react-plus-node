import { createStore } from "redux";
import rotateReducer from "./reducers/index";

const store = createStore(rotateReducer);

export default store;