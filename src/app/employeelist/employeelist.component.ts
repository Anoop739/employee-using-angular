import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  id:any
  employees:any
  constructor(private service:EmployeeService,private router:Router){ }

ngOnInit(): void {
  this.service.GetAllEmployees().then(res=>res.json()).then(data=>this.employees=data)
}
redirectEmpDetail(id:any){
  this.router.navigateByUrl(`employee/${id}`)
}
deleteEmployee(id:any){
  this.service.removeEmployee(id).then(res=>this.ngOnInit)
}
}

