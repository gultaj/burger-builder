import * as actionTypes from 'store/actionTypes';

const inititalState = {
  orders: [],
  loading: false
};

const reducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_ORDER_REQUEST:
      return { ...state, loading: true };
    case actionTypes.PURCHASE_ORDER_SUCCESS:
      return {
        ...state,
        orders: state.orders.concat({
          ...action.payload.orderData,
          id: action.payload.orderId
        }),
        loading: false
      };
    case actionTypes.PURCHASE_ORDER_FAIL:
      return { ...state, loading: false };
    case actionTypes.FETCH_ORDERS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return { ...state, orders: action.payload, loading: false };
    case actionTypes.FETCH_ORDERS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default reducer;
