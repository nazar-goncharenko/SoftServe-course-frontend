import {Pipe, PipeTransform} from '@angular/core';
import {User} from '../shared/interfaces/user';


@Pipe({
    name: 'UserPhotoPipe'
})
export class UserPhotoPipe implements PipeTransform {
    transform(value: User): any {
        if (value.photoUrl === null) {
            return 'assets/icons/default.jpg';
        } else {
            return 'assets/img/' + value.photoUrl;
        }
    }


}
