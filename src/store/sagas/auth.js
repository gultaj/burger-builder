import { put, delay } from 'redux-saga/effects';
import * as authActions from 'store/actions/auth';
import axios from 'axios-auth';

export function* logout(action) {
  yield localStorage.removeItem('token');
  yield localStorage.removeItem('userId');
  yield localStorage.removeItem('expires_in');
  yield put(authActions.logoutSuccess());
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expiresIn * 1000);
  yield put(authActions.logout());
}

export function* authSaga(action) {
  const data = { ...action.authData, returnSecureToken: true };
  const url = action.isSignup ? '/signupNewUser' : '/verifyPassword';
  try {
    const { data: res } = yield axios.post(url, data);
    yield localStorage.setItem('token', res.idToken);
    yield localStorage.setItem('userId', res.localId);
    yield localStorage.setItem(
      'expires_in',
      new Date().getTime() + res.expiresIn * 1000
    );
    yield put(authActions.authSuccessed(res.idToken, res.localId));
    yield put(authActions.checkTimeout(res.expiresIn));
  } catch (error) {
    yield put(authActions.authFailed(error.message));
  }
}

export function* checkAuthState(action) {
  const token = yield localStorage.getItem('token');
  let expires_in = yield localStorage.getItem('expires_in');
  expires_in = new Date(+expires_in);
  if (!token || expires_in <= new Date()) {
    yield put(authActions.logout());
  } else {
    const userId = yield localStorage.getItem('userId');
    yield put(authActions.authSuccessed(token, userId));
    yield put(
      authActions.checkTimeout(
        (expires_in.getTime() - new Date().getTime()) / 1000
      )
    );
  }
}
