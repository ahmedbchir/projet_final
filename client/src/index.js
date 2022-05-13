import React from 'react';
import { createRoot } from 'react-dom/client';
//import { Provider } from 'react-redux';
//import { store } from './app/store';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import  {combineReducers} from "./store/reducer"
import thunk from "redux-thunk" 
import { createStore, applyMiddleware } from 'redux';

const container = document.getElementById('root');
const root = createRoot(container);
const store=createStore(combineReducers, applyMiddleware(thunk));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

