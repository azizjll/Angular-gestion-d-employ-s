import { Component,OnInit } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../employee.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule], // Import CommonModule here
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = []; // Initialize employees as an empty array  constructor(){}
  constructor(private employeeService:EmployeeService,private router:Router){}
  ngOnInit():void{
    this.getEmployees();
  }
  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data =>{
      console.log(data);
      this.employees=data;
    })
  }

  updateEmployee(id :number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data =>{
      console.log(data);
      this.getEmployees();
    })
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details',id])

  }

}
