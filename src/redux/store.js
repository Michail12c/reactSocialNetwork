import profileReducer from './profile-reducer.js';
import dialogsReducer from './dialogs-reducer.js';
/*import sidebarReducer from 'sidebar-reducer.js';*/

let store = {
  _state: {
  profilePage: {
      posts: [
  { id: 1, message:'hi, how are you?', likesCount: 5},
  { id: 2, message:'It is my first post', likesCount: 7}
 ],  
      newPostText:'My project'
  },
dialogsPage: {
  messages: [
  { id: 1, message:'Hi'},
  { id: 2, message:'Thanks, for your course'},
  { id: 3, message:'i am nice'},
  { id: 4, message:'yes'},
  { id: 5, message:'ok'}
 ],
  newMessageText: 'Tests text'
 ,
   dialogs:[
  { id: 1, name:'Misha'},
  { id: 2, name:'Victor'},
  { id: 3, name:'Tom'},
  { id: 4, name:'George'},
  { id: 5, name:'Gala'},
  { id: 6, name:'Alina'},
  { id: 7, name:'Robert'}
   ]
 },
 /*sidebar:{}*/  
},
 
getState(){
  return this._state;
},

callSubscriber (){
  console.log('state changed');
},

 subscribe (observer){
  this.callSubscriber = observer;
},

dispatch(action){

this._state.profilePage = profileReducer(this._state.profilePage, action);
this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
/*this._state.sidebar = sidebarReducer(this._state.sidebar, action);*/
this.callSubscriber(this._state);

 }
}
const ADD_POST = 'ADD-POST';
const UPDATE_NEWPOST_TEXT ='UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSADGE_TEXT = 'UPDATE-NEW-MESSADGE-TEXT';



export default store;
window.store = store;