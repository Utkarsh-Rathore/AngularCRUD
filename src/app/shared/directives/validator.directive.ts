import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";



@Directive({
    selector: '[appSelectValidator]',
    // to register our directive in validators
    providers: [{
        provide: NG_VALIDATORS, //Injection Token
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator {
    validate(control: AbstractControl): { [key: string]: any } | null {
        return control.value==='-1' ? { 'defaultSelected' : true} : null
    }

}