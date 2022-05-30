import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFileComponent } from './components/create-file/create-file.component';
import { EditFileComponent } from './components/edit-file/edit-file.component';
import { ListFilesComponent } from './components/list-files/list-files.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { LoggedInAuthGuard } from './guard/auth-guard-logged-in.guard';
import { AuthGuardGuard } from './guard/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
    
    canActivate: [LoggedInAuthGuard]
  },
  {
    path: 'profile',
    component: PerfilComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'create-file',
    component: CreateFileComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'list-files',
    component: ListFilesComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path: 'edit-file/:id',
    component: EditFileComponent,
    canActivate: [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
