import { async, TestBed } from '@angular/core/testing';
import { RegistroEtapaProcesalesComponent } from './registro-etapa-procesales.component';
describe('RegistroEtapaProcesalesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RegistroEtapaProcesalesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RegistroEtapaProcesalesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=registro-etapa-procesales.component.spec.js.map