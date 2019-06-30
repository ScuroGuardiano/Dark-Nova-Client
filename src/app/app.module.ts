import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './services/login.service';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './components/presentation/presentation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
