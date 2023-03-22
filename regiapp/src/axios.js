import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.254.108:500/api",
});

axiosClient.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    "Content-Type": "Application/json",
  };
  return config;
});

export default axiosClient;
