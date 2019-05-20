import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { PersonasService } from "../../_servicio/personas/personas.service";
import { MatTableDataSource, MatPaginator } from '@angular/material';
var ListarPersonasComponent = /** @class */ (function () {
    function ListarPersonasComponent(servicio) {
        this.servicio = servicio;
        this.listaPersonas = [];
        this.displayedColumns = ['nombre', 'direccion', 'email', 'telefono', 'acciones'];
    }
    ListarPersonasComponent.prototype.onGetPersonas = function () {
        var _this = this;
        this.servicio.getPersonas().subscribe(function (resp) {
            console.log(resp);
            _this.listaPersonas = resp;
            _this.dataSource = new MatTableDataSource(resp);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    ListarPersonasComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListarPersonasComponent.prototype.ngOnInit = function () {
        this.onGetPersonas();
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListarPersonasComponent.prototype, "paginator", void 0);
    ListarPersonasComponent = tslib_1.__decorate([
        Component({
            selector: 'app-listar-personas',
            templateUrl: './listar-personas.component.html',
            styleUrls: ['./listar-personas.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [PersonasService])
    ], ListarPersonasComponent);
    return ListarPersonasComponent;
}());
export { ListarPersonasComponent };
//# sourceMappingURL=listar-personas.component.js.map