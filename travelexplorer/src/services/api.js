import axios from "axios";

const api = axios.create({
 baseURL: "https://travel-backend-39f8.onrender.com/"
});

export default api;
