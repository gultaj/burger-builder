import * as actionTypes from './actions';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.8
};

const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    meat: 0,
    bacon: 0
  },
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload]
      };
    case actionTypes.REMOVE_INGREDIENT:
      if (state.ingredients[action.payload] === 0) return state;
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload]: state.ingredients[action.payload] - 1
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload]
      };
    case actionTypes.CLEAR_INGREDIENTS:
      return {
        ...state,
        ingredients: initialState.ingredients
      };
    default:
      return state;
  }
};

export default reducer;
