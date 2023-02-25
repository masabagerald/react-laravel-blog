import axios from "axios";

const axiosBaseUrl = axios.create({
    // .. where we make our configurations
        baseURL: process.env.MIX_APP_URL + 'api'
    });

    // Where you would set stuff like your 'Authorization' header, etc ...
    axiosBaseUrl.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    axiosBaseUrl.defaults.headers.common['Accept'] = 'application/json';


    export default axiosBaseUrl;
