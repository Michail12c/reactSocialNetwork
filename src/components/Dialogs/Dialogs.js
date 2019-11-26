import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js';

const Dialogs = (props) => {
  console.log(props);
  let state = props.dialogsPage; 

 let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id = {dialog.id} key = {dialog.id}/>
  	);
 let messagesElements = state.messages.map(message => <Message message = {message.message} key = {message.id}/> );
 let newMessageBody  = state.newMessageText; 

 let addMessage = () =>{
   props.sendMessage();
 }

let onUpdateChange = (e) => {
  let body = e.target.value;
  props.updateNewMessedgBody(body);
}
  return (
     <div className = {c.dialogs}>
       <div className={c.dialogItems}>
        {dialogsElements}
       </div>
       <div className={c.messages}>
       	 {messagesElements}
         <div>
           <textarea  onChange = {onUpdateChange} value = {props.newMessageText}></textarea>
         </div>
         <div>
           <button type='button' onClick = {addMessage}>add message</button>
         </div>
       </div>
     </div>
  
  	)
}

export default Dialogs;