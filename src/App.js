import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Navbar from './components/NavBar/NavBar.js';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer.js';

const App = (props) =>  {
  return (
   <div className='app-wrapper'>
     <HeaderContainer/>
     <Navbar/>
     <div className='app-wrapper-content'>
       <Route path = '/profile/:userId?' render = {() => <ProfileContainer/>}/>
       <Route path ='/dialogs' render = {() => <DialogsContainer/>}/>
       <Route path = '/users' render = {() => <UsersContainer/>} />
       <Route path = '/News.js' component = {News}/>
       <Route path = '/Music.js' component = {Music}/>
     </div>
   </div>
  );
}


export default App;
