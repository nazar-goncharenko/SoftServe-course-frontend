import {User} from './user';
import {Article} from './article';

export interface Comment {
    id: number;
    author: User;
    article: Article;
    comment: Comment;
    time: Date;
    likes: number;
    dislikes: number;
}
