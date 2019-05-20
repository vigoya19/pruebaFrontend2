import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
var MasterComponent = /** @class */ (function () {
    function MasterComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(function (result) { return result.matches; }));
        this.menu = [
            {
                nombre: 'Personas',
                link: '',
                icono: 'person',
                show: false,
                status: false,
                child: [
                    {
                        nombre: 'Registrar Personas',
                        link: 'persona/save',
                        icono: 'person_add'
                    },
                    {
                        nombre: 'Listar Personas',
                        link: 'persona/listar-personas',
                        icono: 'people'
                    }
                ]
            },
            {
                nombre: 'Procesos',
                link: '',
                icono: 'work',
                show: false,
                status: false,
                child: [
                    {
                        nombre: 'Registrar Procesos',
                        link: 'procesos/saveProceso',
                        icono: 'import_contacts'
                    },
                    {
                        nombre: 'Listar Procesos',
                        link: 'procesos/listarProcesos',
                        icono: 'format_list_bulleted'
                    },
                    {
                        nombre: 'Etapas Procesales',
                        link: 'procesos/etapasProcesales',
                        icono: 'bookmarks'
                    }
                ]
            },
            {
                nombre: 'Registrar Solicitud',
                link: 'registrarSolicitud',
                icono: 'book',
                show: false,
                status: false,
                child: []
            },
            {
                nombre: 'Juzgados',
                link: '',
                icono: 'work',
                show: false,
                status: false,
                child: [
                    {
                        nombre: 'Registrar Juzgado',
                        link: 'juzgados/crearJuzgado',
                        icono: 'import_contacts'
                    },
                    {
                        nombre: 'Listar Juzgados',
                        link: 'juzgados/listarJuzgados',
                        icono: 'format_list_bulleted'
                    }
                ]
            },
        ];
    }
    MasterComponent = tslib_1.__decorate([
        Component({
            selector: 'app-master',
            templateUrl: './master.component.html',
            styleUrls: ['./master.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [BreakpointObserver])
    ], MasterComponent);
    return MasterComponent;
}());
export { MasterComponent };
//# sourceMappingURL=master.component.js.map