import {SportCategory} from "./sportCategory";

export interface Banner {
    id: number;
    title: string;
    imgPath: string;
    status: string;
    category: SportCategory;
}
