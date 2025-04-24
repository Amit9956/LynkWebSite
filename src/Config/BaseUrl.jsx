export const BaseUrl = "https://app1.crazzyhub.com/"

export const Token ="7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj"


// src/utils/axiosInstance.js
import axios from 'axios';

// Create instance
const axiosInstance = axios.create({
  baseURL: BaseUrl, // 🔁 Replace with your actual base URL

});

// Request interceptor to add token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Token; // or sessionStorage, or from cookies
    if (token) {
      config.headers.Authorization = `${token}`,
      config.headers.Token=`${token}`
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Example: Auto logout on 401
    if (error.response && error.response.status === 401) {
      
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
