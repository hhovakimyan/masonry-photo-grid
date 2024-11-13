import {SearchPhotosResponse} from "api/models/PexelPhotos";
import ServiceError from "api/models/ServiceError";

interface IPhotoService {
    listPhotos(page: number, perPage: number): Promise<SearchPhotosResponse | ServiceError>
}

export default IPhotoService;