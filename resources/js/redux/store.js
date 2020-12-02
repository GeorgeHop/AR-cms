import {createStore} from 'redux';
import reducers from "./reducers";

const store = createStore(reducers);
// store.subscribe(() => store.getState());

export default store;
