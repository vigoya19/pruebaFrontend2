import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';
import { CategoriasComponent } from '../../categorias/categorias.component';
import { CategoriaRoutingModule } from '../categorias/categoria-routing.module';

@NgModule({
  declarations: [CategoriasComponent],
  imports: [
    CommonModule,
    MaterialModule,
    CategoriaRoutingModule
  ]
})



export class CategoriasModule { }
