import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PersonasService = /** @class */ (function () {
    function PersonasService(http) {
        this.http = http;
        this.url = 'http://192.168.2.4:8080/api/';
    }
    PersonasService.prototype.savePersona = function (data) {
        return this.http.post(this.url + 'personas', data);
    };
    PersonasService.prototype.getPersonas = function () {
        return this.http.get(this.url + 'personas');
    };
    PersonasService.prototype.getInfoPersona = function (data) {
        return this.http.get(this.url + 'personas/' + data);
    };
    PersonasService.prototype.updatePersona = function (data) {
        return this.http.put(this.url + 'personas/' + data.id, data);
    };
    PersonasService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PersonasService);
    return PersonasService;
}());
export { PersonasService };
//# sourceMappingURL=personas.service.js.map