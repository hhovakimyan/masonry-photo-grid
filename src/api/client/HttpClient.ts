import {Axios, AxiosResponse} from "axios";
import {ClassConstructor, plainToInstance} from "class-transformer";
import {QueryParams} from "../models/QueryParams";

class HttpClient {
    private static instance: HttpClient;
    private axiosInstance: Axios;

    private constructor(axiosInstance: Axios) {
        this.axiosInstance = axiosInstance;
    }

    public static getInstance(axiosInstance: Axios) {
        if (!this.instance) {
            this.instance = new HttpClient(axiosInstance);
        }

        return this.instance;
    }

    public async get<T>(
        url: string,
        queryParams: QueryParams,
        ResponseModel: ClassConstructor<T>
    ): Promise<T> {
        const response = await this.axiosInstance.get(
            url,
            {
                params: queryParams.getUrlSearchParams(),
            }
        );
        const responseData = await response.data;

        const dto = plainToInstance<T, AxiosResponse<T>>(ResponseModel, responseData);

        return dto as T;
    }
}

export default HttpClient;