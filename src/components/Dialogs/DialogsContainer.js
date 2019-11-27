import React from 'react';
import c from './Dialogs.module.css';
import {addMessageActionCreator, onUpdateChangeActionCreator} from "../../redux/dialogs-reducer.js";
import Dialogs from './Dialogs.js';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect.js';
import {compose} from 'redux';


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


export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
  )(Dialogs);