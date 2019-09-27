import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js'
import setupInterceptors from './interceptor';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

setupInterceptors(store);

ReactDOM.render(
    <Provider store={store}>
      <App  rotating={"dfgd"}/>
    </Provider>, document.getElementById('root'),
);

serviceWorker.unregister();
