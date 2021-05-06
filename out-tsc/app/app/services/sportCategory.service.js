import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let SportCategoryService = class SportCategoryService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getNullParent() {
        return this.httpClient.get('http://localhost:8081/sportCategory/basicNavigationList');
    }
};
SportCategoryService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], SportCategoryService);
export { SportCategoryService };
//# sourceMappingURL=sportCategory.service.js.map