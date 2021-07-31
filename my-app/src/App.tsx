import React, {Dispatch} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Dialogs from "./components/Dialogs/Dialogs";
import store from "./redux/redux-store";
import {ReduxStoreType} from "./redux/store";


type AppPropsType = {
    store: ReduxStoreType
}


function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path='/dialogs' render={() => <Dialogs messages={props.store.getState().dialogsPage.messages}
                                                                  dialogs={props.store.getState().dialogsPage.dialogs}
                                                                  newMessageBody={props.store.getState().dialogsPage.newMessageBody}
                                                                  store={store}

                    />}/>
                    <Route path='/profile' render={() => <Profile posts={props.store.getState().profilePage.posts}
                                                                  newPostText={props.store.getState().profilePage.newPostText}
                                                                  dispatch={props.store.dispatch.bind(props.store)}

                    />}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
