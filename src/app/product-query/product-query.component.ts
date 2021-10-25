import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-query',
  templateUrl: './product-query.component.html',
  styleUrls: ['./product-query.component.css']
})
export class ProductQueryComponent implements OnInit {
  @Output() notify = new EventEmitter()
  constructor(private http: HttpClient) { }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  ngOnInit(): void {
  }
  showConfig() {
    this.http
      //.get<any>('https://0e84-111-240-96-172.ngrok.io')
      .get<any>('https://b5e9-111-240-96-172.ngrok.io/app?kind=2&xg2=22&xg3=33')
      .subscribe((data) => {
        console.log(data);
      });
    // resp is of type `HttpResponse<Config>`
    //.subscribe(resp => {
    // display its headers
    //  const keys = resp.headers.keys();
    //  this.headers = keys.map(key =>
    //    `${key}: ${resp.headers.get(key)}`);
    // access the body directly, which is typed as `Config`.
    //  this.config = { ...resp.body! };
    //});
    // this.ConfigService.getConfig()
    //   .subscribe(
    //     (data: Config) => this.config = { ...data }, // success path
    //     error => this.error = error // error path
    //   );
  }

}
