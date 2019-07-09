import * as actionTypes from 'store/actionTypes';

export const authStart = (authData, isSignup) => ({
  type: actionTypes.AUTH_REQUEST,
  authData,
  isSignup
});

export const authSuccessed = (token, userId) => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: { token, userId }
});

export const authFailed = message => ({
  type: actionTypes.AUTH_FAIL,
  payload: message
});

export const logout = () => ({ type: actionTypes.LOGOUT_REQUEST });

export const logoutSuccess = () => ({ type: actionTypes.LOGOUT_SUCCESS });

export const checkTimeout = expiresIn => ({
  type: actionTypes.AUTH_CHECK_TIMEOUT,
  expiresIn
});

export const checkAuthState = () => ({ type: actionTypes.AUTH_CHECK_STATE });
