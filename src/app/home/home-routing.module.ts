import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../employees/employee.module').then(m => m.EmployeeModule)
      },
    ],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
