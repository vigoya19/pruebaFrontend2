import { async, TestBed } from '@angular/core/testing';
import { RegistrarSolicitudComponent } from './registrar-solicitud.component';
describe('RegistrarSolicitudComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RegistrarSolicitudComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RegistrarSolicitudComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=registrar-solicitud.component.spec.js.map