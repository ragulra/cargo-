import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriplistComponent } from './triplist/triplist.component'
import { LoginComponent } from './login/login.component'


const routes: Routes = [
  {
  path:'triplist',
  component: TriplistComponent},
  {
  path:'login',
  component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
