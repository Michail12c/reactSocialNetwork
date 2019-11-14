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
 } 
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
  if(action.type === 'ADD-POST'){
    let newPost = {
    id: 3,
    message: this._state.profilePage.newPostText,
    likesCount: 0
  }
  this._state.profilePage.posts.push(newPost);
  this._state.profilePage.newPostText = '';
  this.callSubscriber(this._state);
  }
  else if( action.type === 'UPDATE-NEW-POST-TEXT'){
    this._state.profilePage.newPostText = action.newText;
    this.callSubscriber(this._state);
  }
  else if(action.type === 'ADD-MESSAGE'){
    let newMessage = {
    id: 6 ,
    message: this._state.dialogsPage.newMessageText 
  }
  this._state.dialogsPage.messages.push(newMessage);
  this._state.dialogsPage.newMessageText = '';
  this.callSubscriber(this._state);
  }
  else if(action.type === 'UPDATE-NEW-MESSADGE-TEXT'){
     this._state.dialogsPage.newMessageText = action.textMessage;
      this.callSubscriber(this._state);
  }
 }
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEWPOST_TEXT ='UPDATE-NEW-POST-TEXT'; 
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSADGE_TEXT = 'UPDATE-NEW-MESSADGE-TEXT';

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator =(text)=> ({
    type:UPDATE_NEWPOST_TEXT,
    newText: text
})
export const addMessageActionCreator = () =>({
  type: ADD_MESSAGE
})
export const onUpdateChangeActionCreator = (text) =>({ type: UPDATE_NEW_MESSADGE_TEXT, textMessage: text})

export default store;
window.store = store;