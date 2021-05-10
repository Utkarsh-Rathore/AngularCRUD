import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { SelectRequiredValidatorDirective } from './directives/validator.directive';




@NgModule({
  declarations: [
    NavbarComponent,
    SelectRequiredValidatorDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
