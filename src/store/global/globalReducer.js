
import { ADD_TO_CURRENT_CORDINATE, ADD_TO_CURRENT_LOCATION, ADD_TO_CURRENT_SCREEN, SHIPPING_COST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actionTypes';

const initialState = {
  currentLocation: '',
  currentCordinate: null,
  currentRouteName: '',
  user: null,
  shipping:[]
  
};

export const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.payload,
      };
    case ADD_TO_CURRENT_CORDINATE:
      return {
        ...state,
        currentCordinate: action.payload,
      };
    case ADD_TO_CURRENT_SCREEN:
      return {
        ...state,
        currentRouteName: action.payload,
      };


    default:
      return state;
  }
};