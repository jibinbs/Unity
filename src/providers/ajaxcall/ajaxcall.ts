import { HttpClient,HttpParams } from '@angular/common/http';
import { AlertController ,Nav} from 'ionic-angular';
import { Injectable } from '@angular/core';
import'rxjs/add/operator/map';
import'rxjs/add/operator/catch';
/*
  Generated class for the AjaxcallProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AjaxcallProvider {
  baseurl:string='https://houston.lightspree.com/wp-json/'
  constructor(public http: HttpClient) {
    console.log('Hello AjaxcallProvider Provider');
  }
  ajaxcall(data,page){
    let Params = new HttpParams();
     Object.keys(data).forEach(key => {
     Params = Params.append(key, data[key]);
     });
    var config={headers:{'Content-Type': 'application/x-www-form-urlencoded'},}
    return new Promise((resolve, reject) => {
      this.http.get(this.baseurl+page,config)
      .subscribe(res => {
       console.log(res); 
          resolve(res);
        }, (err) => {
          console.log(err);
          reject(err);
        });
    });
  }
}
