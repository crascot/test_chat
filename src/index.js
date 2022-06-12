import React from 'react';
import App from './App';
import store from './features/store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);