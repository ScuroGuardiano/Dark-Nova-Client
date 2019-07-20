import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { NovaApiService } from './services/nova-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    NovaApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
