import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { JuzgadosService } from "../../_servicio/juzgados/juzgados.service";
var ListarJuzgadosComponent = /** @class */ (function () {
    function ListarJuzgadosComponent(servicio) {
        this.servicio = servicio;
        this.listaJuzgados = [];
        this.displayedColumns = ['nombre', 'direccion', 'telefono', 'acciones'];
    }
    ListarJuzgadosComponent.prototype.onGet = function () {
        var _this = this;
        this.servicio.get().subscribe(function (resp) {
            _this.listaJuzgados = resp;
            _this.dataSource = new MatTableDataSource(resp);
            _this.dataSource.paginator = _this.paginator;
        });
    };
    ListarJuzgadosComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ListarJuzgadosComponent.prototype.ngOnInit = function () {
        this.onGet();
    };
    tslib_1.__decorate([
        ViewChild(MatPaginator),
        tslib_1.__metadata("design:type", MatPaginator)
    ], ListarJuzgadosComponent.prototype, "paginator", void 0);
    ListarJuzgadosComponent = tslib_1.__decorate([
        Component({
            selector: 'app-listar-juzgados',
            templateUrl: './listar-juzgados.component.html',
            styleUrls: ['./listar-juzgados.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [JuzgadosService])
    ], ListarJuzgadosComponent);
    return ListarJuzgadosComponent;
}());
export { ListarJuzgadosComponent };
//# sourceMappingURL=listar-juzgados.component.js.map