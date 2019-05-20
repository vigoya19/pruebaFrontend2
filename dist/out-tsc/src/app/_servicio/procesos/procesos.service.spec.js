import { TestBed } from '@angular/core/testing';
import { ProcesosService } from './procesos.service';
describe('ProcesosService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProcesosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=procesos.service.spec.js.map