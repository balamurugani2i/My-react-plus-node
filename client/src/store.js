import { createStore, applyMiddleware, compose } from 'redux';
import rotateReducer from "./reducers/index";
import createSagaMiddleware from 'redux-saga';
import saga from './saga/index'
import httpService from './interceptor';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(rotateReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);
httpService.setupInterceptors(store);
export default store;