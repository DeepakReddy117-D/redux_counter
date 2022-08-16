// Creating a Redux Store 

// import { legacy_createStore } from "redux";
import { legacy_createStore } from "react-redux";
import CounterReducer from "./Reducer";

const Store= legacy_createStore(CounterReducer);

export default Store;