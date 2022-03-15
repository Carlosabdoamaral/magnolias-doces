import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Urls from "./routes";
import './index.scss'
ReactDOM.render(
    <BrowserRouter>
        <Urls/>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
