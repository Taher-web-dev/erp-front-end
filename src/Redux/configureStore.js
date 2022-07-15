import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import sessionReducer from './Session/Reducers/reducer';
import currentUserreducers from './CurrentUser/Reducers/reducer';

const reducers = combineReducers({ session: sessionReducer, currentUser: currentUserreducers });
const store = createStore(reducers, applyMiddleware(logger, thunk));
export default store;
