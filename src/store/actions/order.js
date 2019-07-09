import * as actionTypes from 'store/actionTypes';

export const purchaseOrder = (orderData, token) => ({
  type: actionTypes.PURCHASE_ORDER_REQUEST,
  orderData,
  token
});

export const purchaseOrderSuccess = (orderId, orderData) => ({
  type: actionTypes.PURCHASE_ORDER_SUCCESS,
  payload: { orderId, orderData }
});

export const purchaseOrderFail = () => ({
  type: actionTypes.PURCHASE_ORDER_FAIL
});

export const clearIngredients = () => ({
  type: actionTypes.CLEAR_INGREDIENTS
});

export const fetchOrders = (token, userId) => ({
  type: actionTypes.FETCH_ORDERS_REQUEST,
  token,
  userId
});

export const fetchOrdersSuccess = orders => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  payload: orders
});

export const fetchOrdersFail = () => ({
  type: actionTypes.FETCH_ORDERS_FAIL
});
