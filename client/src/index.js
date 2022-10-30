// Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Module Imports
import rootReducer from './reducers';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
const store = configureStore({ reducer: rootReducer });

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
