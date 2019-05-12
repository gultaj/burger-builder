import * as actionTypes from 'store/actionTypes';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.idToken,
        userId: action.payload.localId
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case actionTypes.AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
