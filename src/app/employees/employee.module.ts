import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    CreateEmployeeComponent,
    ListEmployeesComponent,
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
  ],
  providers: [EmployeeService]
})
export class EmployeeModule { }
