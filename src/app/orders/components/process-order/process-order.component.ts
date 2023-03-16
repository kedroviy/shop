import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

import { UserModel } from '../../models/user.mode';
import { invalidFirstLetterValidator } from './validators';
import { FORM_FIELD } from '../../constants';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProcessOrderComponent implements OnInit {
  countries: Array<string> = [
    'Ukraine', 'Armenia', 'Belarus', 'Hungary', 'Kazakhstan', 'Poland', 'Italy'
  ];

  FORM_FIELD = FORM_FIELD;

  user: UserModel = new UserModel(
    'Aliaskei',
    'Medzviadkou',
    'aliaksei_medzviadkou@epam.com',
    false
  );

  formGroup = this.fb.group({
    [FORM_FIELD.FIRST_NAME]: ['', invalidFirstLetterValidator],
    [FORM_FIELD.LAST_NAME]: [{ value: 'Medzviadkou', disabled: true }, [Validators.required, Validators.maxLength(50)]],
    [FORM_FIELD.EMAIL]: [''],
    [FORM_FIELD.SEND_PRODUCTS]: [true],
    [FORM_FIELD.PHONE]: [null]
  });
  
  constructor(private fb: FormBuilder) { }

  // private setFormValues(): void {
  //   this.formGroup.setValue({
  //     firstName: this.user.firstName,
  //     lastName: this.user.lastName,
  //     email: this.user.email,
  //     sendProducts: this.user.sendProducts
  //   });
  // }

  // private patchFormValues(): void {
  //   this.formGroup.patchValue({
  //     firstName: this.user.firstName,
  //     lastName: this.user.lastName
  //   });
  // }

  public getControl(fieldName: string): FormControl {
    return this.formGroup.get(fieldName) as FormControl;
  }

  // formGroup = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   sendProducts: new FormControl(true)
  // });


  ngOnInit(): void {
    console.log(this.formGroup);
    
  }

  onSave(): void {
    // Form model
    console.log(this.formGroup);
    // Form value w/o disabled controls
    console.log(`Saved: ${JSON.stringify(this.formGroup.value)}`);
    // Form value w/ disabled controls
    console.log(`Saved: ${JSON.stringify(this.formGroup.getRawValue())}`);
  }

  onReset(): void {
    this.formGroup.reset();
  }

}
