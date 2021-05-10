import {SportCategory} from "./sportCategory";

export interface Banner {
    id?: number;
    title: string;
    imgPath?: string;
    status?: string;
    category?: SportCategory;
    lastUpdated?: string;
}

export enum BannerStatusShort {
    OPEN = 'open',
    CLOSED = 'closed'
}

export enum BannerStatus {
    PUBLISHED = 'published',
    NOT_PUBLISHED = 'not published',
    CLOSED = 'closed'
}
