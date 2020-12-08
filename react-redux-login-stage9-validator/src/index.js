import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { composeWithDevTools } from "redux-devtools-extension"
import { createStore, applyMiddleware } from "redux"
import { Provider} from "react-redux"
import rootReducer from './reducers'

// 路由
import routes from "./routes"
import { BrowserRouter as Router} from "react-router-dom"

import NavigationBar from "./components/NavigationBar"
import FlashMessagesList from './components/flash/FlashMessagesList'
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
      <NavigationBar />
      <FlashMessagesList/>
      
      { routes}
    </Router>
 </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
