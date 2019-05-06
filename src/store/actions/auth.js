import * as actionTypes from 'store/actionTypes';
import axios from 'axios-order';

export const auth = authData => dispatch => {
  dispatch({ type: actionTypes.AUTH_REQUEST });
  axios
    .post('/', authData)
    .then(res => {
      dispatch({ type: actionTypes.AUTH_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: actionTypes.AUTH_FAIL });
    });
};
