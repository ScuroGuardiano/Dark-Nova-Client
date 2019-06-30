import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode = "login";
  public email = "";
  public password= "";
  constructor(private loginService: LoginService) {}
  login() {
    this.loginService.login(this.email, this.password)
    .subscribe(result => {
      if(result) {
        alert("Login successful!");
      }
      else {
        alert("Login failed!");
      }
    });
  }
}
