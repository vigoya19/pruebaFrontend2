import { async, TestBed } from '@angular/core/testing';
import { EdirPersonaComponent } from './edir-persona.component';
describe('EdirPersonaComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [EdirPersonaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(EdirPersonaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=edir-persona.component.spec.js.map