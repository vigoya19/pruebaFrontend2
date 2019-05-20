import { async, TestBed } from '@angular/core/testing';
import { CrearJuzgadoComponent } from './crear-juzgado.component';
describe('CrearJuzgadoComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [CrearJuzgadoComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(CrearJuzgadoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=crear-juzgado.component.spec.js.map