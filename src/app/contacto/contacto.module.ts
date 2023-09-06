import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { IndexComponent } from './index/index.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { EditarComponent } from './editar/editar.component';


@NgModule({
  declarations: [
    IndexComponent,
    CrearComponent,
    ListarComponent,
    EliminarComponent,
    EditarComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
