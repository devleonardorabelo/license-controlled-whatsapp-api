import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:21068'
});

export default api;