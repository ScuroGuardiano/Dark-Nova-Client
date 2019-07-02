import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mode = "login";
  public email = "";
  public password = "";
  constructor(private loginService: LoginService) { }
  login() {
    this.loginService.login(this.email, this.password)
      .subscribe(result => {
        if (result) {
          alert("Login successful!");
        }
        else {
          alert("Login failed!");
        }
      });
  }
  register() {
    this.loginService.register(this.email, this.password)
      .subscribe(result => {
        if(result) {
          alert("Register successful!");
        }
        else {
          alert("Register failed!");
        }
      });
  }
  ngOnInit() {
  }
}
