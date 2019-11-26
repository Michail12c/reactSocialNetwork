import React from 'react';
import c from './Dialogs.module.css';
import {addMessageActionCreator, onUpdateChangeActionCreator} from "../../redux/dialogs-reducer.js";
import Dialogs from './Dialogs.js';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
    dialogsPage: state.dialogsPage,
    newMessageText: state.dialogsPage.newMessageText
    
    }
  }

let mapDispatchToProps = (dispatch)=> {
  return {
    updateNewMessedgBody: (body) =>{
      dispatch(onUpdateChangeActionCreator(body));
    },
    sendMessage:() =>{
      dispatch(addMessageActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;