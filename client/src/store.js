import { createStore, applyMiddleware, compose } from 'redux';
import rotateReducer from "./reducers/index";
import createSagaMiddleware from 'redux-saga';
import saga from './saga/index'

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(rotateReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

export default store;