import React from 'react';
import c from './Post.module.css';

const Post = (props) =>{
	return (
        <div className={c.item}>
        <img src="https://www.antislavery.org/wp-content/uploads/2018/11/Hood-trafficking-campaign-banner1.jpg" alt=""/>
          {props.message}
          <div>
            like {props.like}
          </div>
        </div>
  )
}

export default Post;