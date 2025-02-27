import {usersAPI} from '../api/api.js';

const FOLLOW = 'FOLLOW';
const UNFOLLOW ='UNFOLLOW'; 
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOVING_PROGRESS = 'TOGGLE_IS_FOLLOVING_PROGRESS';

let initialState = {
   users: [],
   pageSize:5,
   totalUsersCount:0,
   currentPage:1,
   isFetching: false,
   follovingInProgress:[]
}


 const usersReducer  = (state = initialState, action) => {
       switch(action.type){
       	case FOLLOW: 
       	return {
       		...state,
       		 users: state.users.map( u => {
       			if(u.id === action.userId){
       				return {...u, followed:true};
       			}
       			return u;
       		})
       	}
       	case UNFOLLOW:
       	   	return {
       		...state,
       		users: state.users.map( u => {
       			if(u.id ===  action.userId){
       				return {...u, followed:false};
       			}
       			return u;
       		})
       	}
       	case SET_USERS:
       	return {...state, users:action.users }

        case SET_CURRENT_PAGE:
        return {...state, currentPage:action.currentPage}

        case SET_TOTAL_USERS_COUNT:
        return {...state, totalUsersCount:action.count}

        case TOGGLE_IS_FETCHING:
        return {...state, isFetching:action.isFetching}

        case TOGGLE_IS_FOLLOVING_PROGRESS:
        return {
                ...state, 
                follovingInProgress:action.isFetching 
                ? [...state.follovingInProgress, action.userId] 
                : state.follovingInProgress.filter(id=> id != action.userId)
              }
          
         default: 
         return state;
    }
}

export const followSucces = (userId) => ({type: FOLLOW, userId});
export const unfollowSucces =(userId)=> ({ type: UNFOLLOW, userId });
export const setUsers =(users)=> ({ type: SET_USERS, users });
export const setCurrentPage =(currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) =>({type: SET_TOTAL_USERS_COUNT, count:totalCount});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching});
export const toggleFollovingProgress = (isFetching, userId) => ({type:TOGGLE_IS_FOLLOVING_PROGRESS, isFetching, userId});


export  const getUsers = (currentPage, pageSize) => { 
        return  (dispatch) => {
        dispatch(toggleIsFetching(true));

         usersAPI.getUsers(currentPage, pageSize).then(data => {
          dispatch(toggleIsFetching(false));
          dispatch(setUsers(data.items));
          dispatch(setTotalUsersCount(data.totalCount));
          dispatch(setCurrentPage(currentPage))
    });
  }
}

export  const follow = (userId) => { 
        return  (dispatch) => {
        dispatch(toggleFollovingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
         if(response.data.resultCode == 0){
           dispatch(followSucces(userId));
        }
        dispatch(toggleFollovingProgress(false, userId));
      })
  }
}

export  const unfollow = (userId) => { 
        return  (dispatch) => {
        dispatch(toggleFollovingProgress(true, userId));
        usersAPI.unfollow(userId).then(response => {
         if(response.data.resultCode == 0){
           dispatch(unfollowSucces(userId));
        }
        dispatch(toggleFollovingProgress(false, userId));
      })
  }
}


export default usersReducer;