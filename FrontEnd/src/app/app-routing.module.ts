import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageUserComponent } from './manage-user/manage-user.component';


const routes: Routes = [
  {path: '', component:UserLoginComponent},
  {path: 'register', component:RegistrationComponent},
  {path: 'login', component:UserLoginComponent},
  {path: 'adminhome', component:AdminHomeComponent},
  {path: 'adminhome/manage', component:ManageUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
