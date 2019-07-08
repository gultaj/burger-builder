import * as actionTypes from 'store/actionTypes';
import axios from 'axios-auth';

export const auth = (authData, isSignup) => dispatch => {
  const data = { ...authData, returnSecureToken: true };
  const url = isSignup ? '/signupNewUser' : '/verifyPassword';
  dispatch({ type: actionTypes.AUTH_REQUEST });
  axios
    .post(url, data)
    .then(res => {
      localStorage.setItem('token', res.data.idToken);
      localStorage.setItem('userId', res.data.localId);
      localStorage.setItem(
        'expires_in',
        new Date().getTime() + res.data.expiresIn * 1000
      );
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        payload: {
          token: res.data.idToken,
          userId: res.data.localId
        }
      });
      setTimeout(() => {
        dispatch(logout());
      }, res.data.expiresIn * 1000);
    })
    .catch(error => {
      dispatch({
        type: actionTypes.AUTH_FAIL,
        payload: error.message
      });
    });
};

export const logout = () => ({ type: actionTypes.LOGOUT_REQUEST });

export const checkAuthState = () => dispatch => {
  const token = localStorage.getItem('token');
  const expires_in = new Date(+localStorage.getItem('expires_in'));
  if (!token || expires_in <= new Date()) {
    dispatch(logout());
  } else {
    const userId = localStorage.getItem('userId');
    dispatch({
      type: actionTypes.AUTH_SUCCESS,
      payload: {
        token,
        userId
      }
    });
    setTimeout(() => {
      dispatch(logout());
    }, expires_in.getTime() - new Date().getTime());
  }
};
