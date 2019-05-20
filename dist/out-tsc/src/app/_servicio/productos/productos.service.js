import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var ProductosService = /** @class */ (function () {
    function ProductosService(http) {
        this.http = http;
        this.url = 'http://192.168.2.4:8080/api/';
    }
    ProductosService.prototype.savePersona = function (data) {
        return this.http.post(this.url + 'personas', data);
    };
    ProductosService.prototype.getPersonas = function () {
        return this.http.get(this.url + 'personas');
    };
    ProductosService.prototype.getInfoPersona = function (data) {
        return this.http.get(this.url + 'personas/' + data);
    };
    ProductosService.prototype.updatePersona = function (data) {
        return this.http.put(this.url + 'personas/' + data.id, data);
    };
    ProductosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProductosService);
    return ProductosService;
}());
export { ProductosService };
//# sourceMappingURL=productos.service.js.map