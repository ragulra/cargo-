import { Component } from '@angular/core';

import { NgModule } from '@angular/core/src/metadata/ng_module';

import { LoginComponent } from './login/login.component';


// import {TriplistComponent} from './triplist/triplist.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  rootPage = LoginComponent;   // LoginComponent  TriplistComponent
  title = 'app';
}
// template: `
// <ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>
// `,