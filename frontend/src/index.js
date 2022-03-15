import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from "react-router-dom";
// import Urls from "./routes";
import './index.scss'
import IndexView from "./views/Index/IndexView";
ReactDOM.render(
    <main>
        <IndexView/>
    </main>,
  document.getElementById('root')
);

reportWebVitals();
