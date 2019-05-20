import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { PersonasService } from "../_servicio/personas/personas.service";
import swal from 'sweetalert2';
var PersonaComponent = /** @class */ (function () {
    function PersonaComponent(servicio) {
        this.servicio = servicio;
        this.tipoPersonas = [{ value: 'Natural' }, { value: 'Juridica' }];
        this.tipoUsuarios = [{ value: 'Administrador' }, { value: 'Abogado' }, { value: 'Cliente' }];
        this.listaPersonas = [];
        this.persona = {
            tipoUsuario: '',
            nombre: '',
            nombre2: '',
            apellido: '',
            apellido2: '',
            documento: '',
            email: '',
            direccion: '',
            telefono: '',
            ocupacion: '',
            tipopersona: ''
        };
    }
    PersonaComponent.prototype.onRegistrarPersona = function () {
        var _this = this;
        this.servicio.savePersona(this.persona).subscribe(function (resp) {
            swal.fire({
                title: 'Bien..!',
                text: _this.persona.nombre + " " + _this.persona.nombre2 + " " + _this.persona.apellido + " " + _this.persona.apellido2 + " fue creado exitosamente..!",
                type: 'success'
            });
        });
    };
    PersonaComponent.prototype.ngOnInit = function () {
    };
    PersonaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-persona',
            templateUrl: './persona.component.html',
            styleUrls: ['./persona.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PersonasService])
    ], PersonaComponent);
    return PersonaComponent;
}());
export { PersonaComponent };
//# sourceMappingURL=persona.component.js.map