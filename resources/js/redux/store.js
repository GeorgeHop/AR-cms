import {createStore} from 'redux';
import combineReducers from "./reducers/combineReducers";

const store = createStore(combineReducers);
store.subscribe(() => store.getState());

export default store;
