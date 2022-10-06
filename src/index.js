import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from './App1';
import Context from './Context';
import Todo from './Todo';
import Searchfilter from './Searchfilter';
import Apprest from './Restaurant/Apprest';
import { configureStore } from '@reduxjs/toolkit';
import {store} from './Restaurant/restcontext/context'
const store1=createContext();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Apprest/>
);
reportWebVitals();
