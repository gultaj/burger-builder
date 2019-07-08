import { delay } from 'redux-saga';
import { put, takeEvery, takeLeading } from 'redux-saga/effects';
import * as actionTypes from 'store/actionTypes';
import * as authActions from 'store/actions/auth';

function* logout(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');
  yield localStorage.removeItem('expires_in');
  yield put({ type: actionTypes.LOGOUT_SUCCESS });
}

function* checkAuthTimeoutSaga(action) {
  yield delay(action.expiresIn * 1000);
  yield put(authActions.logout());
}

function* authSaga(action) {
  const data = { ...action.authData, returnSecureToken: true };
  const url = action.isSignup ? '/signupNewUser' : '/verifyPassword';
  try {
    const res = yield axios.post(url, data);
    localStorage.setItem('token', res.data.idToken);
    localStorage.setItem('userId', res.data.localId);
    localStorage.setItem(
      'expires_in',
      new Date().getTime() + res.data.expiresIn * 1000
    );
    put({
      type: actionTypes.AUTH_SUCCESS,
      payload: {
        token: res.data.idToken,
        userId: res.data.localId
      }
    });
    put(authActions.checkTimeout(res.data.expiresIn));
  } catch (error) {
    put({
      type: actionTypes.AUTH_FAIL,
      payload: error.message
    });
  }
}

export function* watchAuth() {
  yield takeEvery(actionTypes.LOGOUT_REQUEST, logout);
  yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeLeading(actionTypes.AUTH_REQUEST, authSaga);
}
