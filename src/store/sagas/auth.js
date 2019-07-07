import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from 'store/actionTypes';

function* logout(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');
  yield localStorage.removeItem('expires_in');
  yield put({ type: actionTypes.LOGOUT_SUCCESS });
}

export function* watchLogout() {
  yield takeEvery(actionTypes.LOGOUT_REQUEST, logout);
}
