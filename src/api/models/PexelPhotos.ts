import {PhotoApiItem, PhotoSize} from "types/photos";
import {QueryParams} from "./QueryParams";

const MIN_PAGINATION_PAGE = 1;
const DEFAULT_PAGINATION_PAGE = 1;

const DEFAULT_PAGINATION_PER_PAGE = 15;
const MIN_PAGINATION_PER_PAGE = 1;
const MAX_PAGINATION_PER_PAGE = 80;

export class SearchPhotosQueryParams extends QueryParams {
    query!: string;
    page?: number;
    per_page?: number;
    size?: PhotoSize;

    public constructor(
        query: string,
        page: number = DEFAULT_PAGINATION_PAGE,
        perPage: number = DEFAULT_PAGINATION_PER_PAGE,
        size?: PhotoSize
    ) {
        super();

        this.query = query;
        this.size = size;

        this.setPage(page);
        this.setPerPage(perPage);
    }

    public setPage(page: number) {
        if (page < MIN_PAGINATION_PAGE) {
            throw new Error(`Invalid ${page} value supplied for page param`);
        }

        this.page = page;
    }

    public setPerPage(perPage: number) {
        if (perPage < MIN_PAGINATION_PER_PAGE || perPage > MAX_PAGINATION_PER_PAGE) {
            throw new Error(`Invalid ${perPage} value supplied for perPage param`);
        }

        this.per_page = perPage;
    }
}

export class SearchPhotosResponse {
    page!: number;
    per_page!: number;
    total_results!: number;
    prev_page?: string;
    next_page?: string;
    photos!: PhotoApiItem[];
}

export class GetPhotoResponse {
    id!: string;
    width!: number;
    height!: number;
    url!: string;
    photographer!: string;
    photographer_url!: string;
    photographer_id!: string;
    avg_color!: string;
    src!: {
        original: string
        large2x: string
        large: string
        medium: string
        small: string
        portrait: string
        landscape: string
        tiny: string
    }
    alt!: string;
}