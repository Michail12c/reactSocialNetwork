import React from 'react';
import c from'./Profile.module.css';
import Profileinfo from './MyPosts/Profileinfo/Profileinfo.js'
import MyPostsContainer from './MyPosts/MyPostsContainer.js';

const Profile = (props) => {
	return (
     <div >
      <Profileinfo profile = {props.profile} status= {props.status} updateStatus = {props.updateStatus}/>
      <MyPostsContainer/>
     </div>
  )
}

export default Profile;