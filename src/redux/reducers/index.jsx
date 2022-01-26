import counterReducer from "./counterReducer";
import crudReducer from "./crudReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    crudReducer: crudReducer
})

const rootReducer = (state, action) =>
    allReducers(state, action);

export default rootReducer