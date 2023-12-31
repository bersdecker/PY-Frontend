import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: ()=>import('./gestionar-usuario/gestionar-usuario.module').then(m=>m.GestionarUsuarioModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
