import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var RegistroEtapaProcesalesComponent = /** @class */ (function () {
    function RegistroEtapaProcesalesComponent() {
        this.etapaProceso = {
            estadoProceso: '',
            recursoReposicion: '',
            recursoApelacion: '',
            admisionRecursoApelacion: '',
            etapaAudiencia: '',
            devolverPrimeraInstancia: ''
        };
    }
    RegistroEtapaProcesalesComponent.prototype.onGuardarEtapaProcesal = function () {
        console.log(this.etapaProceso);
    };
    RegistroEtapaProcesalesComponent.prototype.ngOnInit = function () {
    };
    RegistroEtapaProcesalesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registro-etapa-procesales',
            templateUrl: './registro-etapa-procesales.component.html',
            styleUrls: ['./registro-etapa-procesales.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RegistroEtapaProcesalesComponent);
    return RegistroEtapaProcesalesComponent;
}());
export { RegistroEtapaProcesalesComponent };
//# sourceMappingURL=registro-etapa-procesales.component.js.map