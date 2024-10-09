import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IndexUsuarioComponent } from './components/usuarios/index-usuario/index-usuario.component';
import { CreateUsuarioComponent } from './components/usuarios/create-usuario/create-usuario.component';
import { EditUsuarioComponent } from './components/usuarios/edit-usuario/edit-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},

  {path:'colaborador', component: IndexUsuarioComponent, canActivate:[AuthGuard]},
  {path:'colaborador/create', component: CreateUsuarioComponent, canActivate:[AuthGuard]},
  {path:'colaborador/edit/:id', component: EditUsuarioComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
