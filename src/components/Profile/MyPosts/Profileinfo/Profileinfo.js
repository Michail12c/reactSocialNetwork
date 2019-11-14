import React from 'react';
import c from'./Profileinfo.module.css';


const Profileinfo = () => {
	return (
      <div>
      <div className = {c.example}>
      <img width = '100%' height = '400' src="https://www.vegascreativesoftware.com/fileadmin/user_upload/products/vegas_post/1/vegas_image/vegas-image-dehaze-a-int.jpg"/>
      </div>
    <div className = {c.descriptionBlock}>
      ava + description
    </div>
   </div>
  )
}

export default Profileinfo;