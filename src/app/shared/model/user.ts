// same as user dto

import {SportCategory} from '../interfaces/sportCategory';

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    photoUrl: string;

    favourites?: Array<SportCategory>;
    // userSurveys: Array<Survey>;
    // userBanners: Array<Banner>;
    // userComments: Array<Comment>;

}
