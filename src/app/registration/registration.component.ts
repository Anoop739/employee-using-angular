import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators} from "@angular/forms"
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  regForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.email])
  })
  get username(){
    return this.regForm.get("username")
  }
  get password(){
    return this.regForm.get("password")
  }
  get email(){
    return this.regForm.get("email")
  }
  constructor(private router:Router){

  }
  signUp(){
    console.log(this.regForm.value);
    this.router.navigateByUrl("")
    
  }

}
