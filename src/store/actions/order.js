import * as actionTypes from 'store/actionTypes';
import axios from 'axios-order';

export const purchaseOrder = orderData => dispatch => {
  dispatch({ type: actionTypes.PURCHASE_ORDER_REQUEST });
  axios
    .post('/orders.json', orderData)
    .then(res => {
      dispatch({
        type: actionTypes.PURCHASE_ORDER_SUCCESS,
        payload: {
          orderId: res.data,
          orderData
        }
      });
    })
    .catch(error => {
      dispatch({ type: actionTypes.PURCHASE_ORDER_FAIL });
    });
};
