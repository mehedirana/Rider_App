import envVariables from "../config/env";

const {ACCOUNT_URL} = envVariables;

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

export const phoneLoginOne = async (data) => {
    try {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };

        const response = await fetch(`${ACCOUNT_URL}/phone_login`, requestOptions);
        const json = await response.json();
        return json;

    } catch (e) {
        console.log('error in account login frist step with phone!', e);
    }
}

export const phoneLoginTwo = async (data) => {
    try {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json')

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };

        const response = await fetch(`${ACCOUNT_URL}/phone_login`, requestOptions);
        const json = await response.json();
        return json;

    } catch (e) {
        console.log('error in account login second step with phone!', e);
    }
}