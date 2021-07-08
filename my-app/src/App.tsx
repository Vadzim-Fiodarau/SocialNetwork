import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import {messagesTypes} from "./components/Dialogs/Mesages/Message";
import {dialogsTypes} from "./components/Dialogs/DialogItem/DialogItem";
import {postsType} from "./components/Profile/MyPosts/MyPosts";
import {profilePagePropsType, statePropsType} from "./redux/state";


type AppPropsType = {
    appState:statePropsType

}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs messages={props.appState.dialogsPage.messages}
                                                                  dialogs={props.appState.dialogsPage.dialogs}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.appState.profilePage.posts}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
