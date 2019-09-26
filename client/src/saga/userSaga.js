import { call, put } from 'redux-saga/effects';
import {getUserSuccess, getUserError} from '../actions/userAction'
import { getUsersSaga } from '../service/userService';

function* getUsers() {
    try {
      const response = yield call(getUsersSaga);
      if (response !== '') {
        yield put(getUserSuccess(response));
      }
    } catch (error) {
      yield put(getUserError(error));
    }
  }

  module.exports = {
      getUsers
  }