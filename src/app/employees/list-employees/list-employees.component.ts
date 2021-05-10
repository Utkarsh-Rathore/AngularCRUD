import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      email: 'mark@abc.com',
      phoneNumber: 9830123321,
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1988'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/employee-image.jpeg',
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Femal',
      email: 'mary@abc.com',
      phoneNumber: 23719824791,
      contactPreference: 'Phone',
      dateOfBirth: new Date('11/28/1987'),
      department: 'HR',
      isActive: true,
      photoPath: 'assets/images/employee-image.jpeg',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
