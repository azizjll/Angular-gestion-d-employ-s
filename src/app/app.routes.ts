import { Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreatEmployeeComponent } from './creat-employee/creat-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

export const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent },
  {path:'create-employee',component:CreatEmployeeComponent},
  {path:'update-employee/:id',component:UpdateEmployeeComponent},
  {path:'employee-details/:id',component:EmployeeDetailsComponent},

  { path: '', redirectTo: 'employees', pathMatch: 'full' }
];
