import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  createSagaMiddleware  from 'redux-saga';
import { mainReducer } from './MainReducer/mainReducer';
import App from './App/Container/app';
import MovieAppRootSaga from './MovieApp/Saga/MovieAppRootSaga';
import SearchBarRootSaga from './SearchBar/Saga/SearchBarRootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(mainReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(MovieAppRootSaga);
sagaMiddleware.run(SearchBarRootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
