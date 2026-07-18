import axios from "axios";

console.log("ENV URL:", import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://citizenconnect-nm4v.onrender.com/api",

  headers: {
    "Content-Type": "application/json",
  },
});

console.log("AXIOS BASE URL:", api.defaults.baseURL);

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    console.log("➡️ Request URL:", config.baseURL + config.url);

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
    }

    return Promise.reject(error);
  }
);

export default api;