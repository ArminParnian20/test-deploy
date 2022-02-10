import { combineReducers } from "redux";
import { taskReducers } from './task';
import { taskesReducers } from "./taskes";
import { showTaskReducer } from './showTask';
export const reducers=combineReducers({
        task:taskReducers,
        taskes:taskesReducers,
        showtask:showTaskReducer,
})