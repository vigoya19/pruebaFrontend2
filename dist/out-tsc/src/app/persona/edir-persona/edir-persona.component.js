import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PersonasService } from "../../_servicio/personas/personas.service";
import swal from 'sweetalert2';
var EdirPersonaComponent = /** @class */ (function () {
    function EdirPersonaComponent(servicio, route) {
        this.servicio = servicio;
        this.route = route;
        this.tipoPersonas = [{ value: 'Natural' }, { value: 'Juridica' }];
        this.tipoUsuarios = [{ value: 'Administrador' }, { value: 'Abogado' }, { value: 'Cliente' }];
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
    EdirPersonaComponent.prototype.buscarInfoPersona = function () {
        var _this = this;
        this.servicio.getInfoPersona(this.route.snapshot.paramMap.get('id')).subscribe(function (resp) {
            _this.persona = resp;
        });
    };
    EdirPersonaComponent.prototype.updatePersona = function () {
        this.servicio.updatePersona(this.persona).subscribe(function (resp) {
            swal.fire({
                title: 'Bien..!',
                text: 'Persona Editada Correctamente',
                type: 'success'
            });
        });
    };
    EdirPersonaComponent.prototype.ngOnInit = function () {
        this.buscarInfoPersona();
    };
    EdirPersonaComponent = tslib_1.__decorate([
        Component({
            selector: 'app-edir-persona',
            templateUrl: './edir-persona.component.html',
            styleUrls: ['./edir-persona.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PersonasService, ActivatedRoute])
    ], EdirPersonaComponent);
    return EdirPersonaComponent;
}());
export { EdirPersonaComponent };
//# sourceMappingURL=edir-persona.component.js.map