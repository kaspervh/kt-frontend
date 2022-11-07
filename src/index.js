import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux'
import allReducers from './reducers/index';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
    
      <App />
    
    </Router>
  </Provider>
);
