import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { JuzgadosRoutingModule } from './juzgados-routing.module';
import { CrearJuzgadoComponent } from '../../juzgados/crear-juzgado/crear-juzgado.component';
import { ListarJuzgadosComponent } from '../../juzgados/listar-juzgados/listar-juzgados.component';
import { EditarJuzgadoComponent } from '../../juzgados/editar-juzgado/editar-juzgado.component';
var JuzgadosModule = /** @class */ (function () {
    function JuzgadosModule() {
    }
    JuzgadosModule = tslib_1.__decorate([
        NgModule({
            declarations: [CrearJuzgadoComponent, ListarJuzgadosComponent, EditarJuzgadoComponent],
            imports: [
                CommonModule,
                JuzgadosRoutingModule,
                MaterialModule
            ]
        })
    ], JuzgadosModule);
    return JuzgadosModule;
}());
export { JuzgadosModule };
//# sourceMappingURL=juzgados.module.js.map