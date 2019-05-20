import { TestBed } from '@angular/core/testing';
import { PersonasService } from './personas.service';
describe('PersonasService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(PersonasService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=personas.service.spec.js.map