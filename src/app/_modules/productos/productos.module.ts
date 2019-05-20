import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { ProductosRoutingModule } from '../../_modules/productos/productos-routing.module';
import { ProductosComponent } from '../../productos/productos.component';
import { ListarComponent } from '../../productos/listar/listar.component';

@NgModule({
  declarations: [ProductosComponent, ListarComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MaterialModule
  ]
})
export class ProductosModule { }
