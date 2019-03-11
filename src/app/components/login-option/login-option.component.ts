import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
@Component({
  selector: 'app-login-option',
  templateUrl: './login-option.component.html',
  styleUrls: ['./login-option.component.css']
})
export class LoginOptionComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
    
  }

  onGoogleAPI(){

  }
  onFaceBook(){
    
  }

}
