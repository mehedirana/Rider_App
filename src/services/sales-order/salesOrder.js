import envVariables from '../../config/env';
import {refreshToken} from '../admin';

const {SALES_ORDER_URL} = envVariables;

export const getDriverOrder = async (user, token, dispatchFunc, orderFilter) => {
  try {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    let url = `${SALES_ORDER_URL}/orders/driver?page=1&filter=${orderFilter?.filter}`;

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

export const driverAcceptOrRejectOrder = async (
  data,
  user,
  token,
  dispatchFunc,
) => {
  try {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    };

    let url = `${SALES_ORDER_URL}/orders/driver/order_accept`;

    const response = await fetch(url, requestOptions);
    const json = await response.json();
   console.log(json);
    if (json?.success) {
      return json;
    } else if (json?.error_code == 'unauthorized') {
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
            console.log(`error in fetching accept order!`);
          }
        } else {
          console.log(`error in fetching user token.`);
        }
      } catch (e) {
        console.log(`error in fetching user token.`);
      }
    } else {
      console.log(`error in fetching accept order!`);
      return json;
    }
  } catch (error) {
    console.log('order accept or reject error', error);
  }
};

export const driverUpdateStatus = async (data, user, token, dispatchFunc) => {
  try {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    };

    let url = `${SALES_ORDER_URL}/orders/driver/order_status`;

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
            console.log(`error in fetching status order!`);
          }
        } else {
          console.log(`error in fetching user token.`);
        }
      } catch (e) {
        console.log(`error in fetching user token.`);
      }
    } else {
      console.log(`error in fetching status order!`);
      return json;
    }
  } catch (error) {
    console.log('order status or reject error', error);
  }
};
export const getStats = async (user, token, dispatchFunc) => {
  try {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${token}`);

    const requestOptions = {
      method: 'GET',
      headers: headers,
    };

    let url = `${SALES_ORDER_URL}/orders/driver/stats`;

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
            console.log(`error in fetching status order!`);
          }
        } else {
          console.log(`error in fetching user token.`);
        }
      } catch (e) {
        console.log(`error in fetching user token.`);
      }
    } else {
      console.log(`error in fetching stats order! ------1`);
      return json;
    }
  } catch (error) {
    console.log('order status or reject error', error);
  }
};
