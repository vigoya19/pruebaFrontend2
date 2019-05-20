import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { JuzgadosService } from "../../_servicio/juzgados/juzgados.service";
import swal from 'sweetalert2';
var EditarJuzgadoComponent = /** @class */ (function () {
    function EditarJuzgadoComponent(servicio, route) {
        this.servicio = servicio;
        this.route = route;
        this.juzgado = {
            nombre: '',
            direccion: '',
            telefono: ''
        };
    }
    EditarJuzgadoComponent.prototype.getInfo = function () {
        var _this = this;
        this.servicio.getInfo(this.route.snapshot.paramMap.get('id')).subscribe(function (resp) {
            _this.juzgado = resp;
        });
    };
    EditarJuzgadoComponent.prototype.update = function () {
        var _this = this;
        this.servicio.update(this.juzgado).subscribe(function (resp) {
            console.log(resp);
            _this.juzgado = resp;
            swal.fire({
                title: 'Bien..!',
                text: 'Juzgado Editado Correctamente..!',
                type: 'success'
            });
        });
    };
    EditarJuzgadoComponent.prototype.ngOnInit = function () {
        this.getInfo();
    };
    EditarJuzgadoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-editar-juzgado',
            templateUrl: './editar-juzgado.component.html',
            styleUrls: ['./editar-juzgado.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [JuzgadosService, ActivatedRoute])
    ], EditarJuzgadoComponent);
    return EditarJuzgadoComponent;
}());
export { EditarJuzgadoComponent };
//# sourceMappingURL=editar-juzgado.component.js.map