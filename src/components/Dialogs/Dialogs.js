import React from 'react';
import c from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js';
import {addMessageActionCreator, onUpdateChangeActionCreator} from "../../redux/state.js";

const Dialogs = (props) => {

 let dialogsElements = props.state.dialogs.map( dialog => <DialogItem name={dialog.name} id = {dialog.id}/>
  	);
 let messagesElements = props.state.messages.map(message => <Message message = {message.message}/> );
 let newMessageElement = React.createRef();

 let addMessage = () =>{
   props.dispatch(addMessageActionCreator());
 }

let onUpdateChange = () => {
  let text = newMessageElement.current.value;
  props.dispatch(onUpdateChangeActionCreator(text));
}
  return (
     <div className = {c.dialogs}>
       <div className={c.dialogItems}>
        {dialogsElements}
       </div>
       <div className={c.messages}>
       	 {messagesElements}
         <div>
           <textarea ref = {newMessageElement} onChange = {onUpdateChange} value = {props.state.newMessageText}></textarea>
         </div>
         <div>
           <button type='button' onClick = {addMessage}>add message</button>
         </div>
       </div>
     </div>
  
  	)
}

export default Dialogs;