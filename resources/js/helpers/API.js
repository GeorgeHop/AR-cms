import axios from 'axios';

const API_URL = 'http://AR-CMS.test/api';
export const API = axios.create({
    baseURL: API_URL
});

