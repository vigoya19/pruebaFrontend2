import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var RegistrarSolicitudComponent = /** @class */ (function () {
    function RegistrarSolicitudComponent() {
        this.solicitud = {
            identificacion: '',
            nombre: '',
            segundonombre: '',
            primerapellido: '',
            segundoapellido: '',
            telefono: '',
            email: '',
            pais: '',
            departamento: '',
            ciudad: '',
            oficio: '',
            descripciondesolicitud: '',
        };
    }
    RegistrarSolicitudComponent.prototype.onGuardarSolicitud = function () {
        console.log(this.solicitud);
    };
    RegistrarSolicitudComponent.prototype.ngOnInit = function () {
    };
    RegistrarSolicitudComponent = tslib_1.__decorate([
        Component({
            selector: 'app-registrar-solicitud',
            templateUrl: './registrar-solicitud.component.html',
            styleUrls: ['./registrar-solicitud.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], RegistrarSolicitudComponent);
    return RegistrarSolicitudComponent;
}());
export { RegistrarSolicitudComponent };
//# sourceMappingURL=registrar-solicitud.component.js.map