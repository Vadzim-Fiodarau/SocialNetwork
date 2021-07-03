import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {postsType} from "./components/Profile/MyPosts/MyPosts";
import Post from "./components/Profile/MyPosts/Post/Post";
import {dialogsTypes} from "./components/Dialogs/DialogItem/DialogItem";
import {messagesTypes} from "./components/Dialogs/Mesages/Message";

let posts: Array<postsType> = [
    {id: 1, message: 'Hello, how are you?', likeCounter: 12},
    {id: 2, message: "It's my first post!", likeCounter: 11},
]

let dialogs: Array<dialogsTypes> = [
    {id: 1, name: 'Vadim'},
    {id: 2, name: 'Kate'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Dimych'},
    {id: 6, name: 'Sveta'},
]

let messages: Array<messagesTypes> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your going?'},
    {id: 3, message: 'Yo'},
]

ReactDOM.render(<App posts={posts}
                     dialogs={dialogs}
                     messages={messages}
/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
