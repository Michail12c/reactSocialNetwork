import React from 'react';
import {connect} from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollovingProgress, getUsers} from '../../redux/users-reducer.js';
import * as axios from 'axios';
import Users from './Users.js';
/*import preloader from '../../assets/images/ajax-loader.gif';*/
import Preloader from '../Common/Preloader/Preloader.js';
import {usersAPI} from '../../api/api.js';
import {compose} from 'redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect.js';


 class UsersContainer extends React.Component {

    componentDidMount(){
         this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {

       this.props.getUsers(pageNumber, this.props.pageSize); 
      /*  this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
          this.props.setUsers(data.items);
      });*/
    }

    render(){

     
      return <React.Fragment>
      {this.props.isFetching ? <Preloader/> : null}
      <Users 
      totalUsersCount = {this.props.totalUsersCount}
      pageSize = {this.props.pageSize}
      currentPage = {this.props.currentPage}
      onPageChanged = {this.onPageChanged}
      users = {this.props.users}
      follow = {this.props.follow}
      unfollow = {this.props.unfollow}
      follovingInProgress = {this.props.follovingInProgress}
       />
      }
      }
      </React.Fragment> 
  }
}


let mapStateToProps = (state)=> {
	return {
		users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        follovingInProgress:state.usersPage.follovingInProgress
	}
}



export default compose(
  connect(mapStateToProps, 
   {follow, unfollow,  setCurrentPage,  toggleFollovingProgress, getUsers}
  )
  )(UsersContainer)