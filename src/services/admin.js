import envVariables from "../config/env";

const {ADMIN_URL, ACCOUNT_URL} = envVariables;

export const phoneNumberAvailability = async (phone) => {
    try {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')

        const requestOptions = {
            method: 'GET',
            headers: headers
        };

        const response = await fetch(`${ACCOUNT_URL}/phone_availability/${phone}`, requestOptions);
        const json = await response.json();
        return json;

    } catch (e) {
        console.log('error in fetching phone number availability!', e);
    }
}

export const driverLogin = async (data) => {
    try {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };

        const response = await fetch(`${ADMIN_URL}/login`, requestOptions);
        const json = await response.json();
        return json;

    } catch (e) {
        console.log('error in account login frist step with phone!', e);
    }
}


export const refreshToken = async (data) => {
    try {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };

        const response = await fetch(`${ADMIN_URL}/token/refresh`, requestOptions);
        const json = await response.json();
        console.log(data,'kkkkkkkkkkkkkkk',json);
        return json;

    } catch (e) {
        console.log('error in refresh token!', e);
    }
}



