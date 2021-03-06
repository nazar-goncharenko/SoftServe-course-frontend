import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {SportCategory} from '../shared/interfaces/sportCategory';
import {AppConstants} from '../shared/app.constants';



@Injectable({
    providedIn: 'root'
})
export class SportCategoryService {

    constructor(private httpClient: HttpClient) {
    }

    getNullParent(): any {
        return this.httpClient.get<Array<SportCategory>>('http://localhost:8082/sportCategory/basicNavigationList');
    }
}
