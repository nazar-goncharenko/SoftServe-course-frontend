import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
let FooterComponent = class FooterComponent {
    constructor() {
        this.filmIcon = faTwitter;
    }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss']
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map