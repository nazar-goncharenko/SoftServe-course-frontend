import {Component, OnInit, Renderer2} from '@angular/core';
import {SportCategory} from '../../shared/interfaces/sportCategory';
import {SportCategoryService} from '../services/sportCategory.service';
import {log} from 'util';


@Component({
        selector: 'app-navigation',
        templateUrl: './navigation.component.html',
    }
)
export class NavigationComponent implements OnInit {

    layers = [];

    sportCategories: Array<SportCategory>;
    //     new Set([
    //     {
    //         name: 'NFL', description: 'HOKEY', id: 1, children: new Set<SportCategory>(
    //             [
    //                 {
    //                     name: 'AFC East', parent: null, id: 4, children: new Set<SportCategory>([
    //                         {
    //                             name: 'SubCategory2', description: 'HOKEY', id: 66, children: new Set<SportCategory>([
    //                                 {name: 'Something layer2', parent: null, children: null, id: 55, description: 'some desc'}
    //                             ]), parent: null
    //                         }
    //                     ]), description: 'ssdsd'
    //                 },
    //                 {
    //                     name: 'AFC North', parent: null, id: 5, children: new Set<SportCategory>(
    //                         [
    //                             {
    //                                 name: 'SubCategory1', description: 'HOKEY', id: 6, children: new Set<SportCategory>([
    //                                     {name: 'Something layer1', parent: null, children: null, id: 15, description: 'some desc'}
    //                                 ]), parent: null
    //                             }
    //                         ]), description: 'ssdsd'
    //                 }]), parent: null
    //     },
    //     {
    //         name: 'Tennis', description: 'Tennis', id: 2, children: new Set<SportCategory>(
    //             [{name: 'BigTennis', description: 'tennis', id: 10, parent: null, children: null}]
    //         ), parent: null
    //     }
    // ]);

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
        this.layers = [];
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
