import axios from 'axios';
import { errorInterceptor, responseInterceptor } from './interceptors';

const Api = axios.create({
  baseURL: 'http://localhost:3001'
});

Api.interceptors.response.use(
  (Response) => responseInterceptor(Response),
  (error) => errorInterceptor(error)
);

export {Api};