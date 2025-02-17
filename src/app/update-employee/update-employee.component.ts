import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id: number = 0;  // Initialiser la propriété id avec une valeur par défaut

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe((data: Employee) => {
      this.employee = data;
    }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe((data: any) => {
      this.goToEmployeeList();
    }, (error: any) => console.log(error));
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
