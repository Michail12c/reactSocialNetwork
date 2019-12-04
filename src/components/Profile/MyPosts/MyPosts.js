import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post.js';
import {Field,reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../utils/validators/validators.js';
import {TextArea} from '../../Common/FormsControls/FormsControls.js';

const MyPosts = (props) =>{
 let postsElements = props.posts.map( p => <Post message = {p.message} like = {p.likesCount} id = {p.id} key = {p.id}/>);

 let newPostElement = React.createRef();

let onaddPost = (values) =>{
  props.addPost(values.newPostText);
 }


	return (
	<div className={c.postBlock}>	
     <h3>My post</h3>
       <AddNewPostFormRedux  onSubmit = {onaddPost}/>
      <div className={c.post}>
        {postsElements}
    </div>
   </div>
  )
}
const maxLenght10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return(
     <form onSubmit = {props.handleSubmit}>
      <div>
      <Field name = 'newPostText' component= {TextArea} validate={[required, maxLenght10]} placeholder='Post message'/>
      </div>
      <div>
      <button>add post</button>
       </div>
     </form>
  )
}

const AddNewPostFormRedux = reduxForm({form:'ProfileAddNewPostForm'})(AddNewPostForm);


export default MyPosts;