import React from 'react';
import Profile from './Profile.js';
import {connect} from 'react-redux';
import {withRouter, Redirect} from 'react-router-dom';
import {getUserProfile} from '../../redux/profile-reducer.js';
import * as axios from 'axios';
import {usersAPI} from '../../api/api.js';
import {withAuthRedirect} from '../hoc/withAuthRedirect.js';
import {compose} from 'redux';


class ProfileContainer extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId;
         if(!userId){
         	userId = 2;
         }
         this.props.getUserProfile(userId);
	}

  render() {
     return (
	     <div >
           <Profile {...this.props} profile = {this.props.profile}/>
	     </div>
     )
  }	
}

 
let mapStateToProps = (state) =>({
	profile:state.profilePage.profile,
})

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter,
  withAuthRedirect
  )(ProfileContainer);

