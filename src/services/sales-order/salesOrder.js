import envVariables from '../../config/env';
import {refreshToken} from '../admin';

const {SALES_ORDER_URL} = envVariables;

export const getDriverOrder = async (
  user,
  token,
  dispatchFunc
) => {
  try {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };
   
    console.log('vvvvvvvvv', token);
    let url = `${SALES_ORDER_URL}/orders/driver`;

    const response = await fetch(url, requestOptions);
    const json = await response.json();

    if (json.success) {
      return json;
    } else if (json.error_code == 'unauthorized') {
      try {
        const ref_data = {
          refresh_token: user?.refresh_token,
          id: user?.user_data?.id,
        };

        const data = await refreshToken(ref_data);

        if (data.success) {
          let reqUser = user;
          reqUser['access_token'] = data.data.access_token;
          reqUser['refresh_token'] = data.data.refresh_token;
          dispatchFunc(reqUser);

          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('Authorization', `Bearer ${data.data.access_token}`);

          const requestOptions = {
            method: 'GET',
            headers: headers,
          };

          const res = await fetch(url, requestOptions);
          const jsonRes = await res.json();

          if (jsonRes?.success) {
            return jsonRes;
          } else {
            console.log(`error in fetching sales order!`);
          }
        } else {
          console.log(`error in fetching user token.`);
        }
      } catch (e) {
        console.log(`error in fetching user token.`);
      }
    } else {
      console.log(`error in fetching sales order!`);
      return json;
    }
  } catch (error) {
    console.log('orders error');
  }
};
