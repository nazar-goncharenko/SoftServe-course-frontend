// import {AppConstants} from '../../../../shared/app.constants';
import {Component, OnInit, Renderer2} from '@angular/core';
import {SportCategory} from '@shared/interfaces/sportCategory';
import {SportCategoryService} from '@services/sportCategory.service';
import {AppConstants} from "@shared/app.constants";
import {MostPopularCommentedService} from "@services/most-popular-commented.service";
import {ArticleService} from "@services/article.service";

@Component({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html',
        styleUrls: ['./navigation.component.scss']
    }
)
export class NavigationComponent implements OnInit {

    beforeCategories = AppConstants.Paths.before;
    afterCategories = AppConstants.Paths.after;

    layers = [];

    sportCategories: Array<SportCategory>;


    constructor(private sportCategoryService: SportCategoryService,
                private mostPopularCommentedService: MostPopularCommentedService,
                private articleService: ArticleService) {
    }


    private generate_first_layer(sportCategory: SportCategory): void {
        if (sportCategory.parent === null) {
            if (this.layers.length) {
                if (this.layers[0][0][0].parent === sportCategory.id) {
                    console.log('Yes');
                } else {
                    this.layers = [];
                }
            }
        }
        if (this.layers.length !== 0) {
            for (const layer of this.layers) {
                for (const layerCategory of layer) {
                    if (layerCategory.parent === sportCategory.id) {
                        this.layers = this.layers.slice(0, this.layers.indexOf(layer) + 1);
                    }
                }
            }
        }
    }


    private check_double_click(sportCategory: SportCategory): boolean {
        for (const layer of this.layers) {
            for (const layerElement of layer) {
                for (const layerCategory of layerElement) {
                    if (layerCategory.parent === sportCategory.id) {
                        this.layers = this.layers.slice(0, this.layers.indexOf(layer) + 1);
                        return true;
                    }
                }
            }
        }
        return false;
    }


    private check_previous_layer(sportCategory: SportCategory): void {
        for (const layer of this.layers) {
            for (const layerElement of layer) {
                for (const layerCategory of layerElement) {
                    if (layerCategory.parent === sportCategory.parent) {
                        this.layers = this.layers.slice(0, this.layers.indexOf(layer) + 1);
                    }
                }
            }
        }
    }

    private click_layer_action(sportCategory: SportCategory): void {
        let copy = false;
        let index;
        if (sportCategory.children.length !== 0) {
            sportCategory.children.forEach(elem => {
                for (const layer of this.layers) {
                    for (const layerElement of layer) {
                        for (const layerCategory of layerElement) {
                            if (layerCategory.id === elem.id) {
                                copy = true;
                                index = this.layers.indexOf(layer);
                            }
                        }
                    }
                }
                elem.parent = sportCategory.id;
            });
        } else {
            this.last_layer_action();
            this.articleService.setCurrentLocation(sportCategory.id.toString());
            return;
        }
        if (!copy) {
            this.layers.push([sportCategory.children]);
        } else {
            this.clearLayers();
        }
    }

    private last_layer_action(): void {
        this.clearLayers();
        return;
    }

    getChild(sportCategory: SportCategory): void {
        this.generate_first_layer(sportCategory);

        if(!this.check_double_click(sportCategory)){
            this.check_previous_layer(sportCategory);
            this.click_layer_action(sportCategory);
        } else {
            //this.currentCategoryID = sportCategory.id;
            //this.currentCategoryID.emit(sportCategory.id);
            this.articleService.setCurrentLocation(sportCategory.id.toString());
            this.clearLayers();
        }
        return;
    }

    clearLayers(): void {
        this.layers = [];
    }

    ngOnInit(): void {
        this.sportCategoryService.getNullParent().subscribe(data => {
            for (const category of data) {
                category.parent = null;
            }
            this.sportCategories = data;
        });
    }
}
