import {User} from '@shared/interfaces/user';
import {Estimation} from '@shared/interfaces/estimation';

export interface Comment{
    id: number;
    comment: string;
    author: User;
    time: Date;
    estimations: Array<Estimation>;
    likes ?: Array<Estimation>;
    dislikes ?: Array<Estimation>;
}
