import * as actionTypes from 'store/actionTypes';

export const addIngredient = ingredient => ({
  type: actionTypes.ADD_INGREDIENT,
  payload: ingredient
});

export const removeIngredient = ingredient => ({
  type: actionTypes.REMOVE_INGREDIENT,
  payload: ingredient
});

export const fetchIngredients = () => ({
  type: actionTypes.FETCH_INGREDIENTS_REQUEST
});

export const fetchIngredientsSuccess = data => ({
  type: actionTypes.FETCH_INGREDIENTS_SUCCESS,
  payload: data
});
