import {createStore, combineReducers, applyMiddleware} from 'redux';
import middleware from './middleware';
import reducers from './reducers';

const orderStoryFactory = (server = false, initialState = {}) =>
    applyMiddleware(...middleware(server))(createStore)(
        combineReducers(reducers),
        initialState
    );
    
export default orderStoryFactory;