import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store, {statePropsType} from "./redux/state";


let rerenderEntireTree = (state:statePropsType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App appState={state}
                 dispatch={store.dispatch.bind(store)}
                   />
        </BrowserRouter>, document.getElementById('root'));

}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
