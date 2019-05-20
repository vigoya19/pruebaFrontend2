import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from '../../master/master.component';
import { MainRoutingModule } from './main-routing.module';
import { MaterialModule } from '../../material.module';
import { PreferenceListComponent } from '../../preference-list/preference-list.component';
import { ProductosComponent } from '../../productos/productos.component';
@NgModule({
  declarations: [MasterComponent, ProductosComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule
  ],
  entryComponents: [MasterComponent],
  bootstrap: [MasterComponent]
})
export class MainModule { }
