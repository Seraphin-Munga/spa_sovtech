import { combineReducers } from "redux";
import filmReducer from "./film-reducer";

const reducers = combineReducers({
    films: filmReducer,
});

export default reducers;