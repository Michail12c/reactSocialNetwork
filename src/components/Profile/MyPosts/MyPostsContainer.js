import React from 'react';
import MyPosts from './MyPosts.js';
import {addPostActionCreator} from "../../../redux/profile-reducer.js";
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
	return {
     profilePage: state.profilePage.newPostText,
     posts: state.profilePage.posts
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
	  addPost: (newPostText)=> {
	  	   dispatch(addPostActionCreator(newPostText));
	  }
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;