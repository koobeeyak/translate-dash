import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import reducer from './reducers';
import getTranslationsSaga from './sagas/getTranslationsSaga';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = createStore(reducer, applyMiddleware(...middlewares));

  sagaMiddleware.run(getTranslationsSaga);

  return store;
};

export default configureStore;
