import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; 

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Attach token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const getProducts = async () => (await api.get('/products')).data;
export const getProductById = async (id) => (await api.get(`/products/${id}`)).data;
export const loginUser = async (userData) => (await api.post('/users/login', userData)).data;
export const registerUser = async (userData) => (await api.post('/users/register', userData)).data;
export const getUserProfile = async () => (await api.get('/users/profile')).data;
export const createOrder = async (orderData) => (await api.post('/orders', orderData)).data;

export default api;
