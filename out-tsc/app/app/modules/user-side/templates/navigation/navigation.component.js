import { __decorate } from "tslib";
import { Component } from '@angular/core';
let NavigationComponent = class NavigationComponent {
    constructor(sportCategoryService) {
        this.sportCategoryService = sportCategoryService;
        this.beforeCategories = [
            { name: 'Home', url: '/' },
        ];
        this.afterCategories = [
            { name: 'TeamHub', ulr: '/teamHub' },
            { name: 'LifeStyle', ulr: '/lifeStyle' },
            { name: 'dealbook', ulr: '/dealbook' },
            { name: 'video', ulr: '/video' }
        ];
        this.layers = [];
    }
    generate_first_layer(sportCategory) {
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
    check_previous_layer(sportCategory) {
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
    click_layer_action(sportCategory) {
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
        }
        else {
            this.layers = this.layers.slice(0, index + 1);
        }
    }
    last_layer_action() {
        this.clearLayers();
        return;
    }
    getChild(sportCategory) {
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
    clearLayers() {
        this.layers = [];
    }
    ngOnInit() {
        this.sportCategoryService.getNullParent().subscribe(data => {
            this.sportCategories = data;
        });
    }
};
NavigationComponent = __decorate([
    Component({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html',
        styleUrls: ['./navigation.component.scss']
    })
], NavigationComponent);
export { NavigationComponent };
//# sourceMappingURL=navigation.component.js.map