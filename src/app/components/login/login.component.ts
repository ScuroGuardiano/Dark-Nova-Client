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
  async login() {

  }
  async register() {

  }
  ngOnInit() {
  }
}
