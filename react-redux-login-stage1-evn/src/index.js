import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logger from 'react-logger';
import thunk from 'react-thunk';

import { composeWithDevTools } from "redux-devtools-extension"
import { createStore, applyMiddleware } from "redux"
// import rootReducer from './reducers'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App/>
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
