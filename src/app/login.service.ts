
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class LoginService {
  constructor( private http:HttpClient) { }



getUser(path){
  return this.http.get<any>("http://localhost:3000"+"/"+path);
}


getUserDetail(path){

  return this.http.get<any>("http://localhost:3000"+ "/"+ path);
}
  }

