import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent {

  id:any

  empform=new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    phone:new FormControl("",Validators.required),
    department:new FormControl("",Validators.required),
    salary:new FormControl("",Validators.required)
  })
  get name(){
    return this.empform.get("name")}
  get email(){
      return this.empform.get("email")
  }
  get phone(){
    return this.empform.get("phone")
  }
  get department(){
    return this.empform.get("department")
  }
  get salary(){
    return this.empform.get("salary")
  }
  updateform(data:any){
    console.log(this.id
      );
    
  }
  constructor(private route:ActivatedRoute,private service:EmployeeService ,private router:Router){
    this.id=this.route.snapshot.params["id"]
    console.log(this.id);
    
  }

  ngOnInit(): void {
    this.service.GetEmployeeDetails(this.id).then(res=>res.json()).then(data=>this.updateform(data))
    
    
  }

  EditEmp(){
    console.log(this.empform.value);
    let data=this.empform.value
    this.service.EmployeeEdit(this.id,data).then(res=>res.json()).then(data=>this.router.navigateByUrl("index"))
    
  }


  
 
 
}
