import { async, TestBed } from '@angular/core/testing';
import { ListarJuzgadosComponent } from './listar-juzgados.component';
describe('ListarJuzgadosComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ListarJuzgadosComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ListarJuzgadosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=listar-juzgados.component.spec.js.map