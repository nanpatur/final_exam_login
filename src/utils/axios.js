import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
})

axiosInstance.interceptors.response.use(response => response.data)

export default axiosInstance;