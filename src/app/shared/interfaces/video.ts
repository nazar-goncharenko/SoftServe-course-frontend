import {Comment} from '@shared/interfaces/comment';

export interface Video{
    id: number;
    title: string;
    url: string;
    uploaded: boolean;
    publish: boolean;
    showComments: boolean;
    comments: Array<Comment>;
    [key: string]: any;
}
