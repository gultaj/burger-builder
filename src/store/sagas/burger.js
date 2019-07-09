import axios from 'axios-order';
import { put } from 'redux-saga/effects';
import * as burgerActions from 'store/actions/burger';

export function* fetchIngredients(action) {
  try {
    const res = yield axios.get('/ingredients.json');
    yield put(burgerActions.fetchIngredientsSuccess(res.data));
  } catch (error) {}
}
