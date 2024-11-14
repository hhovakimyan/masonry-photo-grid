export type PhotoApiItem = {
    id: string;
    width: number;
    height: number;
    url: string;
    photographer: string;
    photographer_url: string;
    photographer_id: string;
    avg_color: string;
    src: {
        original: string
        large2x: string
        large: string
        medium: string
        small: string
        portrait: string
        landscape: string
        tiny: string
    }
    alt: string;
}

export type PhotoSize = 'small' | 'medium' | 'large';

export type PhotoUiItem = Omit<PhotoApiItem, "photographer_id" | "photographer_url" | "url" | "src" | "avg_color"> & {
    src: string;
    avgColor: string;
};