import IPexelsPhotoService from "api/interfaces/IPhotoService";
import {
    GetPhotoResponse,
    SearchPhotosQueryParams,
    SearchPhotosResponse,
} from 'api/models/PexelPhotos';
import {pexelsHttpClient} from "api/client";
import BaseService from "./BaseService";

const DEFAULT_PHOTO_SEARCH_QUERY = 'nature';
const DEFAULT_PHOTO_SIZE = 'small';

class PexelsPhotoService extends BaseService implements IPexelsPhotoService {
    public async listPhotos(page: number, perPage: number): Promise<SearchPhotosResponse> {
        const response = await pexelsHttpClient.get(
          '/search',
          SearchPhotosResponse,
          new SearchPhotosQueryParams(DEFAULT_PHOTO_SEARCH_QUERY, page, perPage, DEFAULT_PHOTO_SIZE),
        );

        return response;
    }

    public async getPhotoDetails(id: string): Promise<GetPhotoResponse> {
        const response = await pexelsHttpClient.get(
          `/photos/${id}`,
          GetPhotoResponse
        );

        return response;
    }
}

export default PexelsPhotoService;