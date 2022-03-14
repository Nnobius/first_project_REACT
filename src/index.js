import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={store.getState()}
                     dispatch={store.dispatch.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>, document.getElementById('root')
    );
}

rerender(store.getState());

store.subscribe(rerender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();