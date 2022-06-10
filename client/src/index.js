import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppRouter from './routes/AppRoutes.js';
import reportWebVitals from './reportWebVitals';
import store from './redux/Store/index.js'
import axios from 'axios';
require('dotenv').config()
axios.defaults.baseURL= process.env.REACT_APP_API||"http://localhost:3001";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <AppRouter />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
