import IPexelsPhotoService from "../interfaces/IPhotoService";
import {SearchPhotosQueryParams, SearchPhotosResponse} from "../models/PexelPhotos";
import {pexelsHttpClient} from "../client";
import {AxiosError} from "axios";
import BaseService from "./BaseService";
import ServiceError from "../models/ServiceError";

const DEFAULT_PHOTO_SEARCH_QUERY = 'nature';
const DEFAULT_PHOTO_SIZE = 'small';

class PexelsPhotoService extends BaseService implements IPexelsPhotoService {
    public async listPhotos(page: number, perPage: number): Promise<SearchPhotosResponse | ServiceError> {
        try {
            const response = await pexelsHttpClient.get(
                '/search',
                new SearchPhotosQueryParams(DEFAULT_PHOTO_SEARCH_QUERY, page, perPage, DEFAULT_PHOTO_SIZE),
                SearchPhotosResponse
            );

            return response;
        } catch (error) {
            return this.getServiceError(error as AxiosError);
        }
    }
}

export default PexelsPhotoService;