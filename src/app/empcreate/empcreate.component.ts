import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empcreate',
  templateUrl: './empcreate.component.html',
  styleUrls: ['./empcreate.component.css']
})
export class EmpcreateComponent implements OnInit{
  empform=new FormGroup({
    name:new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    department:new FormControl(),
    salary:new FormControl()
  })
  constructor(private service:EmployeeService,private router:Router){}

  ngOnInit(): void {
    
  }

  saveEmp(){
    console.log(this.empform.value);
    let data=this.empform.value
    this.service.EmployeeCreate(data).then(res=>res.json()).then(data=>this.router.navigateByUrl("index"))
    
  }

}
