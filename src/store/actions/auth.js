import * as actionTypes from 'store/actionTypes';
import axios from 'axios-auth';

export const auth = (authData, isSignup) => dispatch => {
  const data = { ...authData, returnSecureToken: true };
  const url = isSignup ? '/signupNewUser' : '/verifyPassword';
  dispatch({ type: actionTypes.AUTH_REQUEST });
  axios
    .post(url, data)
    .then(res => {
      dispatch({
        type: actionTypes.AUTH_SUCCESS,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: actionTypes.AUTH_FAIL,
        payload: error.message
      });
    });
};
