import { combineReducers } from "redux";
import counterReducer from "./Counter/counterSlice";

const rootReducer = combineReducers({
    counter: counterReducer
})

export default rootReducer