import {SearchPhotosResponse} from "../models/PexelPhotos";
import ServiceError from "../models/ServiceError";

interface IPhotoService {
    listPhotos(page: number, perPage: number): Promise<SearchPhotosResponse | ServiceError>
}

export default IPhotoService;