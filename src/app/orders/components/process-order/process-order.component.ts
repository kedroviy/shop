import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

import { invalidFirstLetterValidator } from './validators';
import { FORM_FIELD } from '../../constants';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ProcessOrderComponent implements OnInit {
  FORM_FIELD = FORM_FIELD;

  private buildPhones() {
    return this.fb.group({
      phone: null,
    });
  }

  formGroup = this.fb.group({
    [FORM_FIELD.FIRST_NAME]: ['', invalidFirstLetterValidator],
    [FORM_FIELD.LAST_NAME]: ['', [Validators.required, Validators.maxLength(50)]],
    [FORM_FIELD.EMAIL]: [''],
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

}
