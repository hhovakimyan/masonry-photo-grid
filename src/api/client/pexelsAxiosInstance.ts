import axios from "axios";

const PEXELS_API_BASE_URL = "https://api.pexels.com/v1";

export const pexelsAxiosInstance = axios.create({
    baseURL: PEXELS_API_BASE_URL,
    headers: {
        "Authorization": process.env.REACT_APP_PEXELS_API_KEY,
    }
});