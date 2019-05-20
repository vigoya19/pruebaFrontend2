import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
import swal from 'sweetalert2';
var PreferenceComponent = /** @class */ (function () {
    function PreferenceComponent() {
        this.per = { name: '', dinner: '', position: 0 };
        this.emv = environment;
    }
    PreferenceComponent.prototype.setChair = function (value) {
        this.per.position = value;
    };
    PreferenceComponent.prototype.setPerson = function () {
        var _this = this;
        this.per.name !== "" && this.per.name !== " " && this.per.dinner !== "" && this.per.dinner !== " " && this.per.position > 0 ?
            swal.fire({
                title: 'Confirm Saving',
                text: "\u00BFAre you sure you want to save this preferences? \n" + (this.per.name + ' ' + this.per.dinner + ' ' + this.per.position) + "?",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ok',
                cancelButtonText: 'Cancel'
            }).then(function (result) {
                if (result.value) {
                    _this.emv.regPersons.push(_this.per);
                    _this.resetPerson();
                    swal.fire('Success', 'Preference saved successfully', 'success');
                }
            }) :
            swal.fire({
                title: 'Ops..!',
                text: 'All imputs are required, please Verify...',
                type: 'warning'
            });
    };
    PreferenceComponent.prototype.resetPerson = function () {
        this.per = { name: '', dinner: '', position: 0 };
    };
    PreferenceComponent.prototype.ngOnInit = function () {
    };
    PreferenceComponent = tslib_1.__decorate([
        Component({
            selector: 'app-preference',
            templateUrl: './preference.component.html',
            styleUrls: ['./preference.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PreferenceComponent);
    return PreferenceComponent;
}());
export { PreferenceComponent };
//# sourceMappingURL=preference.component.js.map