import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {postsType} from "./components/Profile/MyPosts/MyPosts";
import Post from "./components/Profile/MyPosts/Post/Post";
import {dialogsTypes} from "./components/Dialogs/DialogItem/DialogItem";
import {messagesTypes} from "./components/Dialogs/Mesages/Message";
import state from './redux/state';

ReactDOM.render(<App appState={state}/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
