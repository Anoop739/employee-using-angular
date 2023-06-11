import { Component } from '@angular/core';
import { FormControl,FormGroup, Validators} from "@angular/forms"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginform=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })
  constructor(private router:Router){

  }
  get username(){
    return this.loginform.get("username")
  }
  get password(){
    return this.loginform.get("password")
  }
  login(){
    console.log(this.loginform.value);
    this.router.navigateByUrl("index")
    
  }

}
