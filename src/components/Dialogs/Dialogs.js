import React from 'react';
import c from './Dialogs.module.css';
import {NavLink, Redirect} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem.js';
import Message from './Message/Message.js';
import {Field,reduxForm} from 'redux-form';
import {TextArea} from '../Common/FormsControls/FormsControls.js';
import {required, maxLengthCreator} from '../utils/validators/validators.js';

const Dialogs = (props) => {
  console.log(props);
  let state = props.dialogsPage; 

 let dialogsElements = state.dialogs.map( dialog => <DialogItem name={dialog.name} id = {dialog.id} key = {dialog.id}/>
  	);
 let messagesElements = state.messages.map(message => <Message message = {message.message} key = {message.id}/> );
 let newMessageText  = state.newMessageText; 

let addNewMessadge = (values) => {
  props.sendMessage(values.newMessageText);
}

 if (!props.isAuth) return <Redirect to = '/login'/>
  return (
     <div className = {c.dialogs}>
       <div className={c.dialogItems}>
        {dialogsElements}
       </div>
       <div className={c.messages}>
       	 {messagesElements}
         <AddMessageFormRedux onSubmit = {addNewMessadge}/>
       </div>
     </div>
  
  	)
}
const maxLenght50 = maxLengthCreator(50);
const AddMessageForm = (props)=> {
  return(
    <form onSubmit = {props.handleSubmit}>
      <div>
         <Field component = {TextArea} validate={[required, maxLenght50]}  name = 'newMessageText' placeholder = 'Enter your message' />
         </div>
         <div>
           <button>add message</button>
         </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form:'DialogAddMessageForm'})(AddMessageForm);

export default Dialogs;