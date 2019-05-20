import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var ProcesosComponent = /** @class */ (function () {
    function ProcesosComponent() {
        this.tipoPersona = [{ value: 'Natural' }, { value: 'Juridica' }];
        this.jurisdiccions = [{ value: 'Administrativo' }, { value: 'Abogado' }, { value: 'Cliente' }];
        this.estadoProceso = [{ value: 'Admitido' }, { value: 'Inadmitido' }, { value: 'corregir' }];
        this.listAbogados = [];
        this.proceso = {
            jurisdiccion: '',
            radicadodelproceso: '',
            nombredeldemandante: '',
            nombredelproceso: '',
            nombredeldemandado: '',
            nombredeljuzgado: '',
            direcciondeljuzgado: '',
            telefonodeljuzgado: '',
            pais: '',
            departamento: '',
            ciudad: '',
            abogadoencargado: '',
            estadodelproceso: ''
        };
    }
    ProcesosComponent.prototype.onGuardarProceso = function () {
        console.log(this.proceso);
    };
    ProcesosComponent.prototype.ngOnInit = function () {
    };
    ProcesosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-procesos',
            templateUrl: './procesos.component.html',
            styleUrls: ['./procesos.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ProcesosComponent);
    return ProcesosComponent;
}());
export { ProcesosComponent };
//# sourceMappingURL=procesos.component.js.map