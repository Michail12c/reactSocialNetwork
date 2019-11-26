import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post.js';

const MyPosts = (props) =>{
 let postsElements = props.posts.map( p => <Post message = {p.message} like = {p.likesCount} id = {p.id} key = {p.id}/>);

 let newPostElement = React.createRef();

let onaddPost = () =>{
  props.addPost();
 }

 let onPostChange = () => {
  let text = newPostElement.current.value;
   props.updateNewPostText(text);
 }

	return (
	<div className={c.postBlock}>	
     <h3>My post</h3>
     <div>
     	<div>
     		<textarea onChange = {onPostChange} ref = {newPostElement} value = {props.profilePage}/>
     	</div>
     	<div>
     	<button type="button" onClick = {onaddPost}>add post</button>
       </div>
     </div>
      <div className={c.post}>
        {postsElements}
    </div>
   </div>
  )
}

export default MyPosts;