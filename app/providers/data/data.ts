import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage, LocalStorage } from 'ionic-angular';


@Injectable()
export class Data {
  local: Storage;

  constructor() {
    this.local = new Storage(LocalStorage);
  }

  getUsername(): Promise<string> {
    return this.local.get('username');
  }

  setUsername(newUsername: string): Promise<string> {
    return this.local.set('username', newUsername);
  }
}

