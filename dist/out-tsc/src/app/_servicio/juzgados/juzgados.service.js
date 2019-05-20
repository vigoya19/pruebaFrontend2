import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var JuzgadosService = /** @class */ (function () {
    function JuzgadosService(http) {
        this.http = http;
        this.url = 'http://192.168.2.4:8080/api/';
    }
    JuzgadosService.prototype.saveJuzgado = function (data) {
        return this.http.post(this.url + 'juzgado', data);
    };
    JuzgadosService.prototype.get = function () {
        return this.http.get(this.url + 'juzgado');
    };
    JuzgadosService.prototype.getInfo = function (data) {
        return this.http.get(this.url + 'juzgado/' + data);
    };
    JuzgadosService.prototype.update = function (data) {
        return this.http.put(this.url + 'juzgado/' + data.id, data);
    };
    JuzgadosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], JuzgadosService);
    return JuzgadosService;
}());
export { JuzgadosService };
//# sourceMappingURL=juzgados.service.js.map