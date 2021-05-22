import {User} from '@shared/interfaces/user';

export interface Estimation {
    id: number;
    user: User;
    like: boolean;
}
