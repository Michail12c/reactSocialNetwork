import React from 'react';
import preloader from '../../../assets/images/ajax-loader.gif';

let Preloader = (props) => {
	return (
      <div>
        <img src={preloader}/>
      </div>
	)
}
export default Preloader;