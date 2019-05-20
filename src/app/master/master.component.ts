import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-master',
	templateUrl: './master.component.html',
	styleUrls: ['./master.component.css']
})
export class MasterComponent {

	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
		.pipe(
			map(result => result.matches)
		);

	constructor(private breakpointObserver: BreakpointObserver) { }

	public menu = [
		{
		
			    nombre: 'Productos',
				link: '',
				icono: 'work',
				show: false,
				status: false,
				child: [
					{
						nombre: 'Registrar Productos',
						link: 'productos/saveProductos',
						icono: 'import_contacts'
					}
					
				]
		},
		{
			nombre: 'Categorias',
			link: '',
			icono: 'work',
			show: false,
			status: false,
			child: [
				{
					nombre: 'Registrar Categorias',
					link: 'categorias/saveCategoria',
					icono: 'import_contacts'
				}
				
			]
	}
	]

}
