import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createRootReducer from '../reducers';

const combinedReducers = createRootReducer();
const middlewares = [thunk];

const store = createStore(
    combinedReducers,
    compose(applyMiddleware(...middlewares), window.devToolsExtension ? window.devToolsExtension() : f => f)
  );
  ;
export default store;