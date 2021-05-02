import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {AppConstants} from '../../../../shared/app.constants';
import {VideoService} from '../../../../services/video.service';
import {SportCategoryService} from '../../../../services/sportCategory.service';
import {unwrapLazyLoadHelperCall} from '@angular/localize/src/tools/src/source_file_utils';

@Component({
    selector: 'app-admin-navigation',
    templateUrl: './admin-navigation.component.html',
    styleUrls: ['./admin-navigation.component.scss']
})
export class AdminNavigationComponent implements OnInit {

    categories = [];

    constructor(private categoryService: SportCategoryService) {
    }


    drop(event: CdkDragDrop<string[]>): void {
        moveItemInArray(this.categories, event.previousIndex, event.currentIndex);
    }

    ngOnInit(): any {
        // this.sportCategories = await this.categoryService.getNullParent();
        this.categoryService.getNullParent().subscribe(data => {

            for (const category of AppConstants.Paths.before) {
                this.categories.push(category);
            }
            for (const category of data) {
                const tmp = {name: category.name, url: '/'};
                this.categories.push(tmp);
            }
            for (const category of AppConstants.Paths.after) {
                this.categories.push(category);
            }
        });
    }

    getShowCells(): number {
        const width = document.body.offsetWidth;
        return Math.ceil(width / 300);
    }
}
