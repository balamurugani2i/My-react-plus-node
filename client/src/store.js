import { createStore, applyMiddleware, compose } from 'redux';
import rotateReducer from "./reducers/index";
import createSagaMiddleware from 'redux-saga';
import saga from './saga/index'

const sagaMiddleware = createSagaMiddleware();
applyMiddleware(sagaMiddleware)

const store = createStore(rotateReducer);

sagaMiddleware.run(saga);
export default store;