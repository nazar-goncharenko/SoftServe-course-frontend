import {SportCategory} from "@shared/interfaces/sportCategory";

export interface Article {
    id: number;
    title: string;
    description: string;
    imagePath: string;
    category: SportCategory;
    date: Date;
    // comments: Array<Comment>;
}
