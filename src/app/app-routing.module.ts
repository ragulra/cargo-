import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriplistComponent } from './triplist/triplist.component'
import { LoginComponent } from './login/login.component'
import { TabsComponent } from './tabs/tabs.component'



const routes: Routes = [
  {
  path:'triplist',
  component: TriplistComponent
  },
  {
  path:'login',
  component: LoginComponent
  },
  {
    path :'tabs',
    component : TabsComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
