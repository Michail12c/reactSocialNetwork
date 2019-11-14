import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/NavBar/NavBar.js';
import Profile from './components/Profile/Profile.js';
import Dialogs from './components/Dialogs/Dialogs.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) =>  {
  return (
   <BrowserRouter>   
   <div className='app-wrapper'>
     <Header/>
     <Navbar/>
     <div className='app-wrapper-content'>
       <Route path = '/profile' render = {() => <Profile 
        profilePage = {props.state.profilePage}
        dispatch = {props.dispatch} 
         />}/>
       <Route   path ='/dialogs' render = {() => <Dialogs 
        state= {props.state.dialogsPage}
        dispatch = {props.dispatch}/>} />
       <Route path = '/News.js' component = {News}/>
       <Route path = '/Music.js' component = {Music}/>
     </div>
   </div>
  </BrowserRouter> 
  );
}


export default App;
