import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginService } from '../../providers/login-service/login-service';
import { Data } from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private nav: NavController, private loginService: LoginService, private data: Data) {

  }

  ngOnInit(): void {
    this.data.getUsername().then(success => this.username = success);
  }

  login(): void {
    this.loginService.login().then(() => {
      this.data.setUsername(this.username);
      this.nav.setRoot(HomePage);
    });
  }

}
