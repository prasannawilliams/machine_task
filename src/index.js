import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store'
import './index.css';
import App from './pages/App';

const store = configureStore();
console.log('%c +++++++++++++++++++ store', 'background: green; color: white; display: block; font-weight: bold', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
