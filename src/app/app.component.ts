import { Component } from '@angular/core';
import { DataService } from './data.service';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/switchMap';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data: {}[];
  imageUrl:string;

  constructor(private _dataService: DataService) {
    this.imageUrl = "http://cdn.neatorama.com/jill/Chuck-Norris-Approved.jpg";
    _dataService.getData().subscribe(data => this.data = data);
  }

}
