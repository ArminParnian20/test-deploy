import { applyMiddleware, createStore } from "redux";
import { reducers } from './../reducers/index';

const store =createStore(reducers,applyMiddleware(thunk));