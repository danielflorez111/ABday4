import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/pluck';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataService {

  url:string;

  constructor(private http: HttpClient) {
    this.url = "https://api.chucknorris.io/jokes/random";
  }

  getData(): Observable<any> {
    return Observable.timer(0, 6000)
      .switchMap(x => this.http.get(this.url))
      .pluck('value')
      .pairwise();
    }
}