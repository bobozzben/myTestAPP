import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Output, EventEmitter } from '@angular/core';
import { ProductQueryComponent } from '../product-query/product-query.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  error: any;
  headers: string[] = [];

  constructor(private http: HttpClient) {}
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  showConfig() {

  //  this.http
      //.get<any>('https://0e84-111-240-96-172.ngrok.io')  //StandAlone xOne 中文亂碼
      //.get<any>('https://0f96-111-240-96-172.ngrok.io') //StandAlone ERP 有中文
  //    .get<any>('https://b5e9-111-240-96-172.ngrok.io/app?kind=2&xg2=22&xg3=33') // 使用FireDAC可以，中文亂碼需解決
  //    .subscribe((data) => {
  //      console.log(data);
  //    });
    // resp is of type `HttpResponse<Config>`
    //.subscribe(resp => {
    // display its headers
    //  const keys = resp.headers.keys();
    //  this.headers = keys.map(key =>
    //    `${key}: ${resp.headers.get(key)}`);
    // access the body directly, which is typed as `Config`.
    //  this.config = { ...resp.body! };
    //});
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
