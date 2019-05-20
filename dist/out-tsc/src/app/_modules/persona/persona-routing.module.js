import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonaComponent } from '../../persona/persona.component';
import { ListarPersonasComponent } from '../../persona/listar-personas/listar-personas.component';
import { EdirPersonaComponent } from "../../persona/edir-persona/edir-persona.component";
var routes = [
    {
        path: 'save',
        component: PersonaComponent
    },
    {
        path: 'listar-personas',
        component: ListarPersonasComponent
    },
    {
        path: 'editar-personas/:id',
        component: EdirPersonaComponent
    }
];
var PersonaRoutingModule = /** @class */ (function () {
    function PersonaRoutingModule() {
    }
    PersonaRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule]
        })
    ], PersonaRoutingModule);
    return PersonaRoutingModule;
}());
export { PersonaRoutingModule };
//# sourceMappingURL=persona-routing.module.js.map