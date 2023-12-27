import axios from 'axios';

export const axiosInstance = axios.create({ baseURL: 'http://192.168.3.2:8000/' });