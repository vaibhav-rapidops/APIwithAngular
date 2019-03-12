import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginOptionComponent } from './components/login-option/login-option.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { UserDataComponent } from './components/user-data/user-data.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    LoginOptionComponent,
    UserDataComponent
  ],
  imports: [
  BrowserModule,
 AppRoutingModule,
 HttpClientModule,
 HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
