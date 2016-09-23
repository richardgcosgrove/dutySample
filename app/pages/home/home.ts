import { Component, OnInit   } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../providers/login-service/login-service';
import { WebService } from '../../providers/web-service/web-service';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage implements OnInit {
  isOnDuty: boolean = false;
  isLoggedIn: boolean = false;

  constructor(private nav: NavController,
              private loginService: LoginService,
              private webService: WebService) {

  }

  ngOnInit(): void {
    this.loginService.isLoggedIn
    .distinctUntilChanged()
    .debounceTime(200)
    .subscribe(v => this.isLoggedIn = v);

    this.webService.IsOnDuty
    .distinctUntilChanged()
    .debounceTime(200)
    .subscribe(v => this.isOnDuty = v);
  }

  ionViewDidEnter(): void {
    if (!this.loginService.isLoggedIn.value) {
      this.nav.setRoot(LoginPage);
    }
  }

  logout(): void {
    this.loginService.logout().then(() => {
      this.nav.setRoot(LoginPage);
    });
  }

  onDuty(): void {
    if (!this.isOnDuty) {
        this.webService.setDuty(true);
    }
  }

  offDuty(): void {
    if (this.isOnDuty) {
        this.webService.setDuty(false);
    }
  }
}
