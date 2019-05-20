import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
var SolicitudService = /** @class */ (function () {
    function SolicitudService(http) {
        this.http = http;
    }
    SolicitudService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SolicitudService);
    return SolicitudService;
}());
export { SolicitudService };
//# sourceMappingURL=solicitud.service.js.map