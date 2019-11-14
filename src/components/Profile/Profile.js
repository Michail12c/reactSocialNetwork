import React from 'react';
import c from'./Profile.module.css';
import Profileinfo from './MyPosts/Profileinfo/Profileinfo.js'
import MyPosts from './MyPosts/MyPosts.js';

const Profile = (props) => {
	return (
     <div >
      <Profileinfo/>
      <MyPosts posts = {props.profilePage.posts}
      newPostText = {props.profilePage.newPostText}
      dispatch = {props.dispatch} />
     </div>
  )
}

export default Profile;