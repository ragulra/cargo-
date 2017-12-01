import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
 
import {TransityInterceptor} from './transity.interceptor'

import { AppComponent } from './app.component';
import { TriplistComponent } from './triplist/triplist.component';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from './material.module';
import { IonicApp, IonicModule } from 'ionic-angular';
import { TabComponent } from './tab/tab.component';


@NgModule({
  declarations: [
    AppComponent,
    TriplistComponent,
    LoginComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    IonicModule.forRoot(AppComponent)
  ],
  providers: [{
    provide : HTTP_INTERCEPTORS,
    useClass : TransityInterceptor,
    multi : true
  }],
  bootstrap: [IonicApp]
})
export class AppModule { }
