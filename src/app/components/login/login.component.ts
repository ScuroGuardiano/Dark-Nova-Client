import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mode = "login";
  public email = "";
  public password = "";
  constructor(
    private loginService: LoginService,
    private routerek: Router
    ) { }
  async login() {
    if(!this.email || !this.password) {
      alert("You need to fill email and password fields!");
    }
    const res = await this.loginService.login(this.email, this.password);
    if(res === "OK") {
      this.routerek.navigateByUrl('/nova');
    }
    else {
      alert(res); // TODO: Fancy error message :3
    }
  }
  async register() {

  }
  ngOnInit() {
  }
}
