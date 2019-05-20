import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
var PreferenceListComponent = /** @class */ (function () {
    function PreferenceListComponent() {
        this.ent = environment;
        this.displayedColumns = ['Name', 'Dinner', 'Chair'];
    }
    PreferenceListComponent.prototype.ngOnInit = function () {
    };
    PreferenceListComponent = tslib_1.__decorate([
        Component({
            selector: 'app-preference-list',
            templateUrl: './preference-list.component.html',
            styleUrls: ['./preference-list.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PreferenceListComponent);
    return PreferenceListComponent;
}());
export { PreferenceListComponent };
//# sourceMappingURL=preference-list.component.js.map