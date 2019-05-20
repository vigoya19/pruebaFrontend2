import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { JuzgadosService } from "../../_servicio/juzgados/juzgados.service";
import swal from 'sweetalert2';
var CrearJuzgadoComponent = /** @class */ (function () {
    function CrearJuzgadoComponent(servicio) {
        this.servicio = servicio;
        this.juzgado = {
            nombre: '',
            direccion: '',
            telefono: ''
        };
    }
    CrearJuzgadoComponent.prototype.save = function () {
        var _this = this;
        this.servicio.saveJuzgado(this.juzgado).subscribe(function (resp) {
            console.log(resp);
            swal.fire({
                title: 'Bien..!',
                text: _this.juzgado.nombre + " craedo con exito..!",
                type: 'success'
            });
        });
    };
    CrearJuzgadoComponent.prototype.ngOnInit = function () {
    };
    CrearJuzgadoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-crear-juzgado',
            templateUrl: './crear-juzgado.component.html',
            styleUrls: ['./crear-juzgado.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [JuzgadosService])
    ], CrearJuzgadoComponent);
    return CrearJuzgadoComponent;
}());
export { CrearJuzgadoComponent };
//# sourceMappingURL=crear-juzgado.component.js.map