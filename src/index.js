import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers/index';
const store = createStore(reducers, applyMiddleware())
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.querySelector('#root'));