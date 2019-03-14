import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';

import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-option',
  templateUrl: './login-option.component.html',
  styleUrls: ['./login-option.component.css']
})
export class LoginOptionComponent implements OnInit {

  constructor(private router:Router ,private loginService:LoginService) { }
   data:any;
  
  ngOnInit() {
  
    
  }



 onGoogleAPI(){
 const path="google"
 this.loginService.getUser(path).subscribe(
      (res:any)=>{
        window.location.href=res.url;
      },
       error=>{ console.log(error);}
       )

  }

  onFaceBookAPI(){
    const path="facebook";
   this.loginService.getUser(path).subscribe(
    (res:any)=>{
    console.log(res.url);
    window.location.href=res.url;
   
  },
   error=>{ console.log(error);}
 )

}
    
  }


