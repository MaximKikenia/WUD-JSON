
const redux = require("redux");
import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { ReducerOne } from "./reducers/reducerOne.jsx";
import { ReducerTwo } from "./reducers/reducerTwo.jsx";
import { ReducerUniversityList } from "./reducers/reducerUniversityApp.jsx";
//Redux devTool in Chrome: press f12, redux in Chrome
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    ReducerOne,
    ReducerTwo,
    ReducerUniversityList
});

const Store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export {Store};
