import { createStore } from "redux";
import rotateReducer from "./reducers/rotateReducer";

function store(state = { rotating: true }) {
  return createStore(rotateReducer,state);
}

export default store;