import { takeLatest } from 'redux-saga/effects';
import {getUsers} from './userSaga';

export default function* saga() {
    yield takeLatest('getUserInit', getUsers);
}