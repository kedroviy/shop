import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
    static serviceLevel({ value }: AbstractControl): ValidationErrors | null {
        if (value !== undefined && (Number.isNaN(value) || value < 1 || value > 5)) {
            return {
                serviceLevel: true
            };
        }
        return null;
    }

    static asyncEmailPromiseValidator(
        c: AbstractControl
    ):
        Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const email = c.value;
        return new Promise(resolve => {
            setTimeout(() => {
                if (email === 'existsemail@example.com') {
                    resolve({
                        asyncEmailInvalid: true
                    });
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }
}
