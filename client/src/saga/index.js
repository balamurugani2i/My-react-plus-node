import { takeLatest } from 'redux-saga/effects';
import * as  userSaga from './userSaga';

export default function* saga() {
    yield takeLatest('getUserInit', userSaga.getUsersSaga);
}