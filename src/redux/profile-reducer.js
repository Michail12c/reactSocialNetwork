import {usersAPI} from '../api/api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEWPOST_TEXT ='UPDATE-NEW-POST-TEXT'; 
const SET_USER_PROFILE  = 'SET_USER_PROFILE';

let initialState = {
   posts: [
  { id: 1, message:'hi, how are you?', likesCount: 5},
  { id: 2, message:'It is my first post', likesCount: 7}
 ],  
   newPostText:'My project',
   profile: null
}


 const profileReducer  = (state = initialState, action) => {
       switch(action.type){
          case ADD_POST:{
            let newPost = {
			   id: 3,
			   message: state.newPostText,
			   likesCount: 0
			  }
         return  {
          ...state,
          posts: [...state.posts, newPost],
          newPostText: ''
         };
        } 
        case UPDATE_NEWPOST_TEXT:{
          return {
          ...state,
          newPostText: action.newText

        };
      }
      case SET_USER_PROFILE:{
        return{
          ...state,
          profile:action.profile
        }
      }
         default: 
         return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator =(text)=> ({
    type:UPDATE_NEWPOST_TEXT,
    newText: text
})
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) =>{
   usersAPI.getProfile(userId).then(response => {
          dispatch(setUserProfile(response.data));
       });
}

export default profileReducer;