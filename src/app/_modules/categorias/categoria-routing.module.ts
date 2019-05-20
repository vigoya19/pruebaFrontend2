import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from '../../categorias/categorias.component';


const routes: Routes = [
    {
        path: 'saveCategoria',
        component: CategoriasComponent
    }
    // {
    //     path: 'listar-personas',
    //     component: ListarPersonasComponent
    // },
    // {
    //     path: 'editar-personas/:id',
    //     component: EdirPersonaComponent
    // }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriaRoutingModule { }
