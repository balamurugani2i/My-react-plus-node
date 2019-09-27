import {
  call,
  put
} from 'redux-saga/effects';
import {
  getUserSuccess,
  getUserError
} from '../actions/userAction'
import {
  getUsersService
} from '../service/userService';

export function* getUsersSaga() {
  try {
    const response = yield call(getUsersService);
    if (response !== '') {
      yield put(getUserSuccess(response));
    }
  } catch (error) {
    yield put(getUserError(error));
  }
}

export function* createUserSaga() {
  try {
    const response = yield call(getUsersService);
    if (response !== '') {
      yield put(getUserSuccess(response));
    }
  } catch (error) {
    yield put(getUserError(error));
  }
}
