import { NgModule } from '@angular/core';
import { Routes, RouterModule , Router } from '@angular/router';
import { LoginOptionComponent } from './components/login-option/login-option.component';
import { UserDataComponent } from './components/user-data/user-data.component';

const routes: Routes= [
  {path:'loginoption',component:LoginOptionComponent},
  {path:'contact',component:UserDataComponent},
  {path:'', redirectTo:'/loginoption',pathMatch:'full'},


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginOptionComponent,UserDataComponent];
