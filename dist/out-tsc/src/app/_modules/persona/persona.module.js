import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonaComponent } from '../../persona/persona.component';
// import { MasterComponent } from '../../master/master.component';
import { MaterialModule } from '../../material.module';
import { PersonaRoutingModule } from '../../_modules/persona/persona-routing.module';
import { ListarPersonasComponent } from '../../persona/listar-personas/listar-personas.component';
import { EdirPersonaComponent } from '../../persona/edir-persona/edir-persona.component';
var PersonaModule = /** @class */ (function () {
    function PersonaModule() {
    }
    PersonaModule = tslib_1.__decorate([
        NgModule({
            declarations: [PersonaComponent, ListarPersonasComponent, EdirPersonaComponent],
            imports: [
                CommonModule,
                PersonaRoutingModule,
                MaterialModule
            ]
        })
    ], PersonaModule);
    return PersonaModule;
}());
export { PersonaModule };
//# sourceMappingURL=persona.module.js.map