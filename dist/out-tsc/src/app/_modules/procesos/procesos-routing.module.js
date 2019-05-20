import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProcesosComponent } from '../../procesos/procesos.component';
import { ListarProcesosComponent } from "../../procesos/listar-procesos/listar-procesos.component";
import { RegistroEtapaProcesalesComponent } from '../../procesos/registro-etapa-procesales/registro-etapa-procesales.component';
var routes = [
    {
        path: 'saveProceso',
        component: ProcesosComponent
    },
    {
        path: 'listarProcesos',
        component: ListarProcesosComponent
    },
    {
        path: 'etapasProcesales',
        component: RegistroEtapaProcesalesComponent
    }
];
var ProcesosRoutingModule = /** @class */ (function () {
    function ProcesosRoutingModule() {
    }
    ProcesosRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], ProcesosRoutingModule);
    return ProcesosRoutingModule;
}());
export { ProcesosRoutingModule };
//# sourceMappingURL=procesos-routing.module.js.map