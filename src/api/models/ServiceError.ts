export class ServiceError {
    serviceName!: string;

    responseError!: {
        code: string;
        status: number;
    };
}

export default ServiceError;