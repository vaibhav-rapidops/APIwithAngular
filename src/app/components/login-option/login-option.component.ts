import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-login-option',
  templateUrl: './login-option.component.html',
  styleUrls: ['./login-option.component.css']
})
export class LoginOptionComponent implements OnInit {

  constructor(private loginService:LoginService) { }
   data:any;
   url="http://localhost:3000";
  ngOnInit() {
    
  }

  onGoogleAPI(){

       this.loginService.get(this.url).subscribe((res:any[])=>{

       console.log(res);
      },
      error=>{
        console.log(error);
      })


  }
  onFaceBook(){
    
  }

}
