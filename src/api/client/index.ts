import HttpClient from "./HttpClient";
import {pexelsAxiosInstance} from "./pexelsAxiosInstance";

export const pexelsHttpClient = HttpClient.getInstance(pexelsAxiosInstance);
