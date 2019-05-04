import * as actionTypes from 'store/actionTypes';
import axios from 'axios-order';

export const addIngredient = ingredient => ({
  type: actionTypes.ADD_INGREDIENT,
  payload: ingredient
});

export const removeIngredient = ingredient => ({
  type: actionTypes.REMOVE_INGREDIENT,
  payload: ingredient
});

export const fetchIngredients = () => dispatch => {
  axios
    .get('/ingredients.json')
    .then(res => {
      dispatch({
        type: actionTypes.FETCH_INGREDIENTS,
        payload: res.data
      });
    })
    .catch(error => error);
};
