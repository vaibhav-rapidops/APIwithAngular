import { Injectable } from '@angular/core';
import { HttpClient,HttpClientJsonpModule } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
//import { JsonPipe } from '@angular/common';

interface myData{
  obj: Array<Object>
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }
  

  //get(callback="callback"){
   // return this.http.get<any>(this.url+"/google");

   //return this.http.get<myData>("http://localhost:3000/google");
   //return this.json[].transform(this.url+"/google");
   get(url, callback = 'callback') {
    return this.http.jsonp(url+"/google", callback);
   }
  }

