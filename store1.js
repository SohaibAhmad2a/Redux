import {createStore} from "redux";
import {CounterReducer1} from "./counterReducer1.js";

const store1=createStore(CounterReducer1);

export default store1;