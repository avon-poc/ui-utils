import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BaseUrl,
    headers: {}
});

export default api;