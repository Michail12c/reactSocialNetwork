import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Navbar from './components/NavBar/NavBar.js';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import Login from './components/Login/Login.js';
import News from './components/News/News.js';
import Music from './components/Music/Music.js';
import {BrowserRouter, Route} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer.js';
import {initializeApp} from './redux/app-reducer.js';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import Preloader from './components/Common/Preloader/Preloader.js';

class App extends React.Component {
  
  componentDidMount(){
    this.props.initializeApp();
  }

  render(){
    if(!this.props.initialized){
      return <Preloader/>
    }
  return (
   <div className='app-wrapper'>
     <HeaderContainer/>
     <Navbar/>
     <div className='app-wrapper-content'>
       <Route path = '/profile/:userId?' render = {() => <ProfileContainer/>}/>
       <Route path ='/dialogs' render = {() => <DialogsContainer/>}/>
       <Route path = '/login' render = {() => <Login/>} />
       <Route path = '/users' render = {() => <UsersContainer/>} />
       <Route path = '/News.js' component = {News}/>
       <Route path = '/Music.js' component = {Music}/>
     </div>
   </div>
  );
 }
}

const mapStateToProps = (state) => ({
   initialized:state.app.initialized
})

export default compose(
  withRouter,
 connect (mapStateToProps, {initializeApp}))(App);
