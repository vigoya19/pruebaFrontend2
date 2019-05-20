import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MasterComponent } from '../../master/master.component';
import { MaterialModule } from '../../material.module';
import { PersonaRoutingModule } from '../../_modules/persona/persona-routing.module';
import { ProductosComponent } from './productos.component';
var ProductosModule = /** @class */ (function () {
    function ProductosModule() {
    }
    ProductosModule = tslib_1.__decorate([
        NgModule({
            declarations: [ProductosComponent],
            imports: [
                CommonModule,
                PersonaRoutingModule,
                MaterialModule
            ]
        })
    ], ProductosModule);
    return ProductosModule;
}());
export { ProductosModule };
//# sourceMappingURL=productos.module.js.map