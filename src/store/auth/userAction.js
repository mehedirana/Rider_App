import {USER_LOGIN_SUCCESS, USER_LOGOUT} from '../actionTypes';

export const userLogIn =(user) => dispatch =>{
  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: {...user}
  })
}
export const userLogOut =() => dispatch =>{
  dispatch({
    type: USER_LOGOUT ,
    payload: {}
  })
}