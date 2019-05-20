import { TestBed } from '@angular/core/testing';
import { SolicitudService } from './solicitud.service';
describe('SolicitudService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SolicitudService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=solicitud.service.spec.js.map