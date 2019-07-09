import { all, takeEvery, takeLeading, takeLatest } from 'redux-saga/effects';
import * as actionTypes from 'store/actionTypes';
import * as authSagas from './auth';
import * as burgerSagas from './burger';
import * as orderSagas from './order';

export default function* rootSaga() {
  yield all([watchAuth(), watchBurger(), watchOrder()]);
}

function* watchAuth() {
  yield takeEvery(actionTypes.LOGOUT_REQUEST, authSagas.logout);
  yield takeEvery(
    actionTypes.AUTH_CHECK_TIMEOUT,
    authSagas.checkAuthTimeoutSaga
  );
  yield takeLatest(actionTypes.AUTH_REQUEST, authSagas.authSaga);
  yield takeLatest(actionTypes.AUTH_CHECK_STATE, authSagas.checkAuthState);
}

function* watchBurger() {
  yield takeLatest(
    actionTypes.FETCH_INGREDIENTS_REQUEST,
    burgerSagas.fetchIngredients
  );
}

function* watchOrder() {
  yield takeLeading(actionTypes.FETCH_ORDERS_REQUEST, orderSagas.fetchOrders);
  yield takeLeading(
    actionTypes.PURCHASE_ORDER_REQUEST,
    orderSagas.purchaseOrder
  );
}
