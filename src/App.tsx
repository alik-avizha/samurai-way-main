import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";



const App = () => {
      return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/Profile' render={() => <Profile
                />}/>
                <Route path='/Messages' render={() => <DialogsContainer
                />}/>
                <Route path='/News' render={() => <News/>}/>
                <Route path='/Music' render={() => <Music/>}/>
                <Route path='/Settings' render={() => <Settings/>}/>
                <Route path='/Users' render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}
export default App;
