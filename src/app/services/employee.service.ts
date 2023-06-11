import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  GetAllEmployees(){
     return fetch("http://127.0.0.1:8000/employees/")
  }
  GetEmployeeDetails(id:any){
    return fetch(`http://127.0.0.1:8000/employees/${id}/`)
  }

  EmployeeCreate(data:any){
    let options={
      "method":"post",
      "body":JSON.stringify(data),
      "headers":{
        "Content-type":"application/json; charset=UTF-8"
      }
    }


    return fetch("http://127.0.0.1:8000/employees/",options)
    }
  removeEmployee(id:any){
    let options={
      "method":"delete",
      "headers":{
        "Content-type":"application/json; charset=UTF-8"
      }
    }
    return fetch(`http://127.0.0.1:8000/employees/${id}/`,options)

  }
  EmployeeEdit(id:any,data:any){
    let options={
      "method":"post",
      "body":JSON.stringify(data),
      "headers":{
        "Content-type":"application/json; charset=UTF-8"
      }
    }
  return fetch(`http://127.0.0.1:8000/employees/${id}/`,options)
 

}
}
