import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  providers: [{provide: MatFormFieldControl, useExisting: AdminAddProductComponent}],
  styleUrls: ['./admin-add-product.component.scss']
})
export class AdminAddProductComponent implements OnInit, OnChanges {

  public formGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
});
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

  }
}
