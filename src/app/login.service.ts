import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
HttpClient
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }
  url="http://localhost:3000";
  get(path){
    return this.http.get(this.url+'/'+path)
  }
}
