import axios from "axios";

const api = axios.create({
 baseURL: "https://travel-backend-1-fobd.onrender.com"
});

export default api;
