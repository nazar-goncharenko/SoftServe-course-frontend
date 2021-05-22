import {Pipe, PipeTransform} from '@angular/core';
import {Comment} from '@shared/interfaces/comment';

@Pipe({
    name: 'CommentPipe'
})
export class CommentPipe implements PipeTransform {


    sortByData(comment1: Comment, comment2: Comment): number {
        if (comment1.time >= comment2.time) {
            return -1;
        } else {
            return 1;
        }
    }

    sortByRating(comment1: Comment, comment2: Comment): number {
        if (comment1.likes.length > comment2.likes.length) {
            return -1;
        } else if (comment1.likes.length === comment2.likes.length){
            if (comment1.dislikes.length < comment2.dislikes.length){
                return -1;
            }
            else{
                return 0;
            }
        }
        else{
            return 1;
        }
    }

    transform(array: Array<Comment>, option: number): Array<Comment> {
        if (option === 0) {
            array.sort(this.sortByData);
        }
        if (option === 1) {
            array.sort(this.sortByRating);
        }
        return array;
    }


}
