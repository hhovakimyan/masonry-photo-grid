import {AxiosError} from "axios";
import ServiceError from "../models/ServiceError";

abstract class BaseService {
    getServiceError(error: AxiosError) {
        const serviceError = new ServiceError();
        serviceError.serviceName = this.constructor.name;

        if (error?.response?.data) {
            serviceError.responseError = error?.response?.data as {code: string, status: number}
        }

        return serviceError;
    }
}

export default BaseService;