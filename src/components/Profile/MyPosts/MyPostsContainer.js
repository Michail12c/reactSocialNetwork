import React from 'react';
import MyPosts from './MyPosts.js';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer.js";
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
	return {
     profilePage: state.profilePage.newPostText,
     posts: state.profilePage.posts
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
	  updateNewPostText: (text)=>{
	  	 let action = updateNewPostTextActionCreator(text);
	 		dispatch(action);
	  },
	  addPost: ()=> {
	  	   dispatch(addPostActionCreator());
	  }
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;