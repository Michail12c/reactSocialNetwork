import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post.js';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state.js";

const MyPosts = (props) =>{

 let postsElements = props.posts.map( p => <Post message = {p.message} like = {p.likesCount}/>);

 let newPostElement = React.createRef();

let addPost = () =>{
  props.dispatch(addPostActionCreator());
 }

 let onPostChange = () => {
  let text = newPostElement.current.value;
   props.dispatch(updateNewPostTextActionCreator(text));
 }

	return (
	<div className={c.postBlock}>	
     <h3>My post</h3>
     <div>
     	<div>
     		<textarea onChange = {onPostChange} ref = {newPostElement} value = {props.newPostText}/>
     	</div>
     	<div>
     	<button type="button" onClick = {addPost}>add post</button>
       </div>
     </div>
      <div className={c.post}>
        {postsElements}
    </div>
   </div>
  )
}

export default MyPosts;