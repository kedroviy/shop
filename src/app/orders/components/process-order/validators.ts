import { FormControl, ValidationErrors } from '@angular/forms';

import { regExp } from 'src/app-config/const/constants';
import { validationMessagesMap } from '../../constants';

export const firstNameValidation = (formControl: FormControl): ValidationErrors => {
    const valueArray = formControl.value.split('');
    
    if (formControl.value?.length && !regExp.test(valueArray[0])) {
        return { message: validationMessagesMap.get('firstName')!.firstLetter }
    }

    return null as any;
};