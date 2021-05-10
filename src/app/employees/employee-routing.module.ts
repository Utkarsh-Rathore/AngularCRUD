import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstants } from 'src/app/shared/constants/route.constants';
import { pathToFileURL } from 'url';

import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeesComponent } from './list-employees/list-employees.component';

const routes: Routes = [
  {
  path: RouteConstants.List,
  component: ListEmployeesComponent
  },
  {
    path: RouteConstants.Create,
    component: CreateEmployeeComponent
  },
  {
    path: '',
    redirectTo: RouteConstants.List, pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
