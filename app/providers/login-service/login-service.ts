import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from "rxjs";
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: Http) {}

  login(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.isLoggedIn.next(true);
      resolve(true);
    });
  }

  logout(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.isLoggedIn.next(false);
      resolve(true);
    });
  }

}

