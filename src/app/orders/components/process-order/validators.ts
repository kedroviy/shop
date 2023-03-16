import { FormControl, ValidationErrors } from '@angular/forms';

import { regExp } from 'src/app-config/const/constants';


export const invalidFirstLetterValidator = (formControl: FormControl): ValidationErrors => {
        const valueArray = formControl.value.split('');

        if (!regExp.test(valueArray[0] || !valueArray.length)) {
            return { message: 'Enter first letter like uppercase' }
        } 
    
    return null as any;
};