import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducer from './../reducers/reducer';
import reducer1 from './../reducers/reducer1';
import thunk  from 'redux-thunk';

const store = createStore(
    combineReducers({
        libraries: reducer,
        books: reducer1
    }), 
    applyMiddleware(thunk));

export { store as default }