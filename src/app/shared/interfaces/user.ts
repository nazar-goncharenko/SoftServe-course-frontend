import {SportCategory} from './sportCategory';

export interface User {
    id: number;
    username: string;
    email: string;
    password: string;
    photoUrl: string;

    favourites?: Array<SportCategory>;
    userBanners: Array<any>;
    userComments: Array<any>;
}
