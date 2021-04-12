import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SportCategory} from '../../shared/interfaces/sportCategory';


@Injectable({
    providedIn: 'root'
})
export class SportCategoryService {

    constructor(private httpClient: HttpClient) {
    }

    getNullParent(): any {
        return this.httpClient.get<Array<SportCategory>>('http://localhost:8080/sportCategory/basicNavigationList');
    }
}
