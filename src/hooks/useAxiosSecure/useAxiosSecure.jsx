import axios from 'axios';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
    baseURL: 'https://ovigo-job-task-server.vercel.app', 
  });

const useAxiosSecure = () => {
    const {logout} = useContext(AuthContext); 
    const navigate = useNavigate(); 
  
    useEffect(() => {
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem('access-token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
  
      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            await logout();
            navigate('/');
          }
          return Promise.reject(error);
        }
      );
    }, [logout, navigate]);
  
    return [axiosSecure];
};

export default useAxiosSecure;