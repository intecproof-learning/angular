import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './crear/crear.component';
import { IndexComponent } from './index/index.component';
import { ListarComponent } from './listar/listar.component';
import { EditarComponent } from './editar/editar.component';
import { EliminarComponent } from './eliminar/eliminar.component';

const routes: Routes = [
  { path: 'contacto', redirectTo: 'contacto/index', pathMatch: 'full' },
  { path: 'cc', redirectTo: 'contacto/crear', pathMatch: 'full' },
  { path: 'c/c', redirectTo: 'contacto/crear', pathMatch: 'full' },
  { path: 'contacto/index', component: IndexComponent },
  { path: 'contacto/crear', component: CrearComponent },
  { path: 'contacto/listar', component: ListarComponent },
  { path: 'contacto/editar', component: EditarComponent },
  { path: 'contacto/eliminar', component: EliminarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
