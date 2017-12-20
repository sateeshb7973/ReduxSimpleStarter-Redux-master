import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';


// Middlewares are functions it take actions and depending on action type or action payload
// the middleware can choose to pass through the action then middleware can manipulate or log or stop action
// before they reach the reducers
// they are like gate keepers
// redux-promise is the popular package for middleware
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
