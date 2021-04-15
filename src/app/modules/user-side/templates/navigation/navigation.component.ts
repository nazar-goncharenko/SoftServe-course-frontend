import {Component, OnInit, Renderer2} from '@angular/core';
import {SportCategory} from '../../../../shared/interfaces/sportCategory';
import {SportCategoryService} from '../../../../services/sportCategory.service';
import {log} from 'util';


@Component({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html',
        styleUrls: ['./navigation.component.scss']
    }
)
export class NavigationComponent implements OnInit {

    beforeCategories = [
        {name: 'Home', url: '/'},
    ];

    afterCategories = [
        {name: 'TeamHub', ulr: '/teamHub'},
        {name: 'LifeStyle', ulr: '/lifeStyle'},
        {name: 'dealbook', ulr: '/dealbook'},
        {name: 'video', ulr: '/video'}
    ];

    layers = [];

    sportCategories: Array<SportCategory>;

    constructor(private sportCategoryService: SportCategoryService) {
    }


    private generate_first_layer(sportCategory: SportCategory): void {
        if (sportCategory.parent === null) {
            this.layers = [];
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
        }
        else {
            this.last_layer_action();
            return;
        }
        if (!copy) {
            this.layers.push([sportCategory.children]);
        } else {
            this.layers = this.layers.slice(0, index + 1);
        }
    }

    private last_layer_action(): void{
        this.clearLayers();
        return;
    }

    getChild(sportCategory: SportCategory): void {
        console.log(this.sportCategories);
        console.log(this.layers);

        // first layer
        this.generate_first_layer(sportCategory);

        // for layer from previous
        this.check_previous_layer(sportCategory);

        // for double click layer
        this.click_layer_action(sportCategory);
        return;
    }

    clearLayers(): void {
        this.layers = [];
    }

    ngOnInit(): void {
        this.sportCategoryService.getNullParent().subscribe(data => {
            this.sportCategories = data;
        });
    }
}
