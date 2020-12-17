import {combineReducers} from 'redux';
import sidebarReducer from "./sidebarReducer";
import userReducer from "./userReducer";

export default combineReducers({
    sidebarReducer,
    userReducer
});
