import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray, AbstractControl } from '@angular/forms';

import { firstNameValidation } from './validators';
import { FORM_FIELD, validationMessagesMap } from '../../constants';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProcessOrderComponent implements OnInit {
  FORM_FIELD = FORM_FIELD;
  validationMessagesMap = validationMessagesMap;

  private buildPhones() {
    return this.fb.group({
      phone: null,
    });
  }

  formGroup = this.fb.group({
    [FORM_FIELD.FIRST_NAME]: ['', firstNameValidation],
    [FORM_FIELD.LAST_NAME]: ['', [Validators.required, Validators.maxLength(50)]],
    [FORM_FIELD.EMAIL]: ['',
      [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+'),
        Validators.email
      ]
    ],
    [FORM_FIELD.PHONE]: this.fb.array([this.buildPhones()]),
    [FORM_FIELD.SELF_DELIVERY]: [false],
    [FORM_FIELD.SHIPPING_ADRESS]: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  get phone(): FormArray {
    return this.formGroup.get(FORM_FIELD.PHONE) as unknown as FormArray;
  }

  public getControl(fieldName: string): FormControl {
    return this.formGroup.get(fieldName) as FormControl;
  }

  get sendProducts(): AbstractControl {
    return this.formGroup.get('sendProducts')!;
  }

  ngOnInit(): void {
    console.log(this.formGroup);
    this.setValidationMessages();
  }

  onSave(): void {
    // Form model
    console.log(this.formGroup);
    // Form value w/o disabled controls
    console.log(`Saved: ${JSON.stringify(this.formGroup.value)}`);
    // Form value w/ disabled controls
    console.log(`Saved: ${JSON.stringify(this.formGroup.getRawValue())}`);
  }

  onAddPhone(): void {
    console.log(this.buildPhones())
    this.phone.push(this.buildPhones());
  }

  onRemovePhone(index: number): void {
    this.phone.removeAt(index);
  }

  onReset(): void {
    this.formGroup.reset();
  }

  isShowValidationMessage(controlName: string): boolean {
    return this.validationMessagesMap.get(controlName)!.message && (this as {
      [index:
        string]: any
    })[controlName].touched;
  }

  private buildValidationMessages(controlName: string): void {
    const c: AbstractControl = (this as { [index: string]: any })[controlName];
    this.validationMessagesMap.get(controlName)!.message = '';
    if (c?.errors) {
      this.validationMessagesMap.get(controlName)!.message = Object.keys(c.errors)
        .map(key => {
          const value = this.validationMessagesMap.get(controlName)!;
          return (value as { [index: string]: any })[key];
        })
        .join(' ');
    }
  }

  private setValidationMessages(): void {
    this.validationMessagesMap.forEach((control, cntrlName) => {
      this.buildValidationMessages(cntrlName);
    });
  }

}
