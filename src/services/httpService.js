import axios from "axios";
import store from '../app/store';

const baseUrl = process.env.REACT_APP_API_URL || "https://localhost:7228";

const ajax = async (url, method, data) => {
    url = `${baseUrl}/${url}`;

    let state = store.getState();
    let user = state.user;
    let accessToken = user && user.access_token;

    try {
        let result = await axios({
            url,
            method,
            data,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Authorization": `Bearer ${accessToken}`
            }
        });

        return result.data;
    } catch (err) {
        console.error('httpService', err);
        return null;
    }
};

const HttpService = {
    get: (url) => ajax(url, "GET"),
    post: (url, data) => ajax(url, "POST", data),
    put: (url, data) => ajax(url, "PUT", data),
    delete: (url, data) => ajax(url, "DELETE", data)
};

export default HttpService;
