import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { LoginOptionComponent } from '../login-option/login-option.component';
import { Router } from 'express';
import { ActivatedRoute ,ParamMap} from '@angular/router';



@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

 path="google/userData";
 datas:any;  
 check=false;
 param:string;

  constructor(private loginService:LoginService ,private activatedRoute:ActivatedRoute) { 
  this.activatedRoute.queryParams.subscribe(params=>{
    this.param=params['type'];
    console.log(this.param);
   this.path=this.getpath(this.param);
  })
  }
  

  ngOnInit() {
    this.userContact(this.path);
  }
   userContact(path){
     
    this.loginService.getUserDetail(path).subscribe(
      (res:any)=>{
       if(res.userDetail){
        this.datas=res.userDetail;
         this.check=true; 
      }else{
        this.datas=res.message;
      }
    
    },
       error=>{
         console.log(error);
       }
    ); 

  }

  getpath(param){
    if(param==="gapi"){
      return "google/userData";
    }else if(param==="fapi"){
      return "facebook/userData";
    }

  }
}
