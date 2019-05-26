import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterComponent } from '../../master/master.component';
import { ProductosComponent } from '../../productos/productos.component';
const routes: Routes = [
	{
		path: '',
		redirectTo: 'main',
		pathMatch: 'full'
	},
	{
		path: 'main',
		component: MasterComponent,
		children: [
			{
				path: '',
				redirectTo: 'productos',
				pathMatch: 'full'
			},
			{
				path: 'productos/saveProductos',
				component: ProductosComponent
			},
			// {
			// 	path: 'productos',
			// 	loadChildren: '../productos/productos.module#ProductosModule'
			// },
			{
				path: 'categorias',
				loadChildren: '../categorias/categorias.module#CategoriasModule'
			}
			// path: 'procesos',
			// loadChildren:'../procesos/procesos.module'
		]
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class MainRoutingModule { }
