
import axios from "axios";



const instance = axios.create();

instance.interceptors.request.use(
  async (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return error?.response?.data;
  },
);

export default instance;
