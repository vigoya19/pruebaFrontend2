import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreferenceComponent } from '../../preference/preference.component';
import { PreferenceListComponent } from '../../preference-list/preference-list.component';
import { MasterComponent } from '../../master/master.component';
import { RegistrarSolicitudComponent } from '../../registrar-solicitud/registrar-solicitud.component';
var routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MasterComponent,
        children: [
            {
                path: '',
                redirectTo: 'preference',
                pathMatch: 'full'
            },
            {
                path: 'preference',
                component: PreferenceComponent
            },
            {
                path: 'list',
                component: PreferenceListComponent
            },
            {
                path: 'persona',
                loadChildren: '../persona/persona.module#PersonaModule'
            },
            {
                path: 'procesos',
                loadChildren: '../procesos/procesos.module#ProcesosModule'
            },
            {
                path: 'registrarSolicitud',
                component: RegistrarSolicitudComponent
            },
            {
                path: 'juzgados',
                loadChildren: '../juzgados/juzgados.module#JuzgadosModule'
            }
            // path: 'procesos',
            // loadChildren:'../procesos/procesos.module'
        ]
    },
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());
export { MainRoutingModule };
//# sourceMappingURL=main-routing.module.js.map