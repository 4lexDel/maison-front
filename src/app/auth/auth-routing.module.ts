import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

const routes: Routes = [
    { path: '', component:  LoginComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'register', component:  RegisterComponent},
    { path: 'change-password', component:  ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}