import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import capsulesReducer from "./reducer";

const store = createStore(capsulesReducer, applyMiddleware(thunk));

export default store;
