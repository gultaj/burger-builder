import { put } from 'redux-saga/effects';
import axios from 'axios-order';
import * as orderActions from 'store/actions/order';

export function* purchaseOrder(action) {
  try {
    const res = yield axios.post(
      '/orders.json?auth=' + action.token,
      action.orderData
    );
    yield put(
      orderActions.purchaseOrderSuccess(res.data.name, action.orderData)
    );
    yield put(orderActions.clearIngredients());
  } catch (error) {
    yield put(orderActions.purchaseOrderFail());
  }
}

export function* fetchOrders(action) {
  const queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${
    action.userId
  }"`;
  try {
    const res = yield axios.get('orders.json' + queryParams);
    const orders = Object.keys(res.data).map(key => ({
      ...res.data[key],
      id: key
    }));
    yield put(orderActions.fetchOrdersSuccess(orders));
  } catch (error) {
    yield put(orderActions.fetchOrdersFail());
  }
}
