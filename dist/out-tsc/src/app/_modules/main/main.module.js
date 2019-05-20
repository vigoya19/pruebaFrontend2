import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from '../../master/master.component';
import { PreferenceComponent } from '../../preference/preference.component';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../../material.module';
import { PreferenceListComponent } from '../../preference-list/preference-list.component';
import { RegistrarSolicitudComponent } from '../../registrar-solicitud/registrar-solicitud.component';
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib_1.__decorate([
        NgModule({
            declarations: [MasterComponent, PreferenceComponent, PreferenceListComponent, RegistrarSolicitudComponent],
            imports: [
                CommonModule,
                MainRoutingModule,
                MaterialModule
            ],
            entryComponents: [MasterComponent],
            bootstrap: [MasterComponent]
        })
    ], MainModule);
    return MainModule;
}());
export { MainModule };
//# sourceMappingURL=main.module.js.map