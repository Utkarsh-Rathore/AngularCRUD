import { Injectable } from "@angular/core";
import { Employee } from "./models/employee.model";

@Injectable()
export class EmployeeService {
    private listEmployee: Employee[] = [
        {
        id: 1,
        name: 'Mark',
        gender: 'Male',
        email: 'mark@abc.com',
        phoneNumber: 9830123321,
        contactPreference: 'Email',
        dateOfBirth: new Date('10/25/1988'),
        department: '1',
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
        department: '3',
        isActive: true,
        photoPath: 'assets/images/employee-image.jpeg',
      },
    ];

    getEmployee() : Employee[] {
        return this.listEmployee;
    }

    saveEmployee(employee: Employee) {
        this.listEmployee.push(employee);
    }
}