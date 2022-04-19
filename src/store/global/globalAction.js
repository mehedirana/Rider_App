import { ADD_TO_CURRENT_CORDINATE, ADD_TO_CURRENT_LOCATION, ADD_TO_CURRENT_SCREEN, SHIPPING_COST } from "../actionTypes";

export const setCureentLocation =(loc)=> dispatch =>{
    dispatch({
        type: ADD_TO_CURRENT_LOCATION,
        payload: loc,
      });
}
export const setCureentCordinate =(loc)=> dispatch =>{
    dispatch({
        type: ADD_TO_CURRENT_CORDINATE,
        payload: loc,
      });
}
export const updateCurrentRouteName =(screen)=> dispatch =>{
    dispatch({
        type: ADD_TO_CURRENT_SCREEN,
        payload: screen,
      });
}
