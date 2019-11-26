import React from 'react';
import c from'./Profileinfo.module.css';
import Preloader from '../../../Common/Preloader/Preloader.js';


const Profileinfo = (props) => {
if(!props.profile ){
  return <Preloader/>
}

	return (
      <div>
      <div className = {c.example}>
      <img width = '100%' height = '300' src="https://www.vegascreativesoftware.com/fileadmin/user_upload/products/vegas_post/1/vegas_image/vegas-image-dehaze-a-int.jpg"/>
      </div>
    <div className = {c.descriptionBlock}>
    <img src = {props.profile.photos.large}/>
    <div>{props.profile.fullName}</div>
    <div>{props.profile.aboutMe}</div>
    </div>
   </div>
  )
}

export default Profileinfo;