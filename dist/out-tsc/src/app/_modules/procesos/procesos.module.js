import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ProcesosComponent } from '../../procesos/procesos.component';
import { ProcesosRoutingModule } from '../../_modules/procesos/procesos-routing.module';
import { RegistroEtapaProcesalesComponent } from '../../procesos/registro-etapa-procesales/registro-etapa-procesales.component';
import { ListarProcesosComponent } from '../../procesos/listar-procesos/listar-procesos.component';
var ProcesosModule = /** @class */ (function () {
    function ProcesosModule() {
    }
    ProcesosModule = tslib_1.__decorate([
        NgModule({
            declarations: [ProcesosComponent, RegistroEtapaProcesalesComponent, ListarProcesosComponent],
            imports: [
                CommonModule,
                MaterialModule,
                ProcesosRoutingModule
            ]
        })
    ], ProcesosModule);
    return ProcesosModule;
}());
export { ProcesosModule };
//# sourceMappingURL=procesos.module.js.map