import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(applyMiddleware()),
  )
)

export default store;