import { combineReducers } from 'redux';
import auth from 'store/reducers/auth';
import order from 'store/reducers/order';
import burger from 'store/reducers/burger';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watchLogout } from 'store/sagas/auth';

const sagaMiddleware = createSagaMiddleware();
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    auth,
    order,
    burger
  }),
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk, sagaMiddleware))
);
/* eslint-enable */

sagaMiddleware.run(watchLogout);

export default store;
