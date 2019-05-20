import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CrearJuzgadoComponent } from "../../juzgados/crear-juzgado/crear-juzgado.component";
import { EditarJuzgadoComponent } from "../../juzgados/editar-juzgado/editar-juzgado.component";
import { ListarJuzgadosComponent } from '../../juzgados/listar-juzgados/listar-juzgados.component';
var routes = [
    {
        path: 'crearJuzgado',
        component: CrearJuzgadoComponent
    },
    {
        path: 'editarJuzgados/:id',
        component: EditarJuzgadoComponent
    },
    {
        path: 'listarJuzgados',
        component: ListarJuzgadosComponent
    }
];
var JuzgadosRoutingModule = /** @class */ (function () {
    function JuzgadosRoutingModule() {
    }
    JuzgadosRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], JuzgadosRoutingModule);
    return JuzgadosRoutingModule;
}());
export { JuzgadosRoutingModule };
//# sourceMappingURL=juzgados-routing.module.js.map