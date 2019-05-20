import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from '../../productos/productos.component';
import { ListarComponent } from '../../productos/listar/listar.component';



const routes: Routes = [
    {
        path: 'saveProductos',
        component: ProductosComponent
    },
    {
        path: 'listar-productos',
        component: ListarComponent
    }
  
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductosRoutingModule { }
