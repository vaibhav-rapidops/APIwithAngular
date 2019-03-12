import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginOptionComponent } from './components/login-option/login-option.component';

const routes: Routes = [
  {path:' ', redirectTo:'/loginoption',pathMatch:'full'},
  {path:'loginoption',component:LoginOptionComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginOptionComponent];
