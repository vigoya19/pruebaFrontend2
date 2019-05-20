import { TestBed } from '@angular/core/testing';
import { ProductosService } from './productos.service';
describe('ProductosService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ProductosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=productos.service.spec.js.map