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
          orderId: res.data.name,
          orderData
        }
      });
      dispatch({ type: actionTypes.CLEAR_INGREDIENTS });
    })
    .catch(error => {
      dispatch({ type: actionTypes.PURCHASE_ORDER_FAIL });
    });
};

export const fetchOrders = () => dispatch => {
  dispatch({ type: actionTypes.FETCH_ORDERS_REQUEST });
  axios
    .get('orders.json')
    .then(res => {
      const orders = Object.keys(res.data).map(key => ({
        ...res.data[key],
        id: key
      }));
      dispatch({
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        payload: orders
      });
    })
    .catch(error => {
      dispatch({ type: actionTypes.FETCH_ORDERS_FAIL });
    });
};
