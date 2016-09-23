import { Injectable, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class WebService implements OnInit {

  public IsOnDuty: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: Http) {}

  ngOnInit() {
      this.getDuty().then(
        v => {
          this.IsOnDuty.next(v);
        },
        reason => {
          alert('could not reach server');
          this.IsOnDuty.next(false);
        }
      );
  }

  getDuty(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.IsOnDuty.next(this.IsOnDuty.value);
      resolve(true);
    });
  }

  setDuty(value: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.IsOnDuty.next(value);
      resolve(true);
    });
  }

}

