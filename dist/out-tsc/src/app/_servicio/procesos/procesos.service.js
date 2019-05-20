import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var ProcesosService = /** @class */ (function () {
    function ProcesosService(http) {
        this.http = http;
        this.url = 'http://192.168.2.4:8080/api/';
    }
    ProcesosService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], ProcesosService);
    return ProcesosService;
}());
export { ProcesosService };
//# sourceMappingURL=procesos.service.js.map