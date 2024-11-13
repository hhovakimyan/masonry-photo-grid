import {SearchPhotosResponse} from "api/models/PexelPhotos";

interface IPhotoService {
    listPhotos(page: number, perPage: number): Promise<SearchPhotosResponse>
}

export default IPhotoService;