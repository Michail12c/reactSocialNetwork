const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSADGE_TEXT = 'UPDATE-NEW-MESSADGE-TEXT';

let initialState = {
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


 const dialogsReducer  = (state = initialState, action) => {
 	switch(action.type) {
 		case ADD_MESSAGE:
    let body = state.newMessageText;
        return {
                ...state,
                newMessageText: '',
                messages:[...state.messages, {id: 6, message: body}]
              }	      
	    case UPDATE_NEW_MESSADGE_TEXT: 
       return {
                ...state,
                newMessageText:action.textMessage
              };
	    default:
	    return state;   
 	 }
}


export const addMessageActionCreator = () =>({
  type: ADD_MESSAGE
})
export const onUpdateChangeActionCreator = (text) =>({ type: UPDATE_NEW_MESSADGE_TEXT, textMessage: text})

export default dialogsReducer;