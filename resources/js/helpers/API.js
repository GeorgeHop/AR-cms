import axios from 'axios';
import {ApiUrl, CsrfToken} from "./constants";

const instance = axios.create({
    baseURL: ApiUrl,
});

export const CsrfInterceptor = instance.interceptors.request.use(config => {
    config.headers['X-CSRF-TOKEN'] = CsrfToken;
    return config;
});

export default instance;
