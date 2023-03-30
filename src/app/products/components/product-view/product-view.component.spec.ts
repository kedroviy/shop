import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { RouterStub } from 'src/app/testing-helpers';

import { ProductViewComponent } from './product-view.component';

describe('ProductViewComponent', () => {
  let component: ProductViewComponent;
  let fixture: ComponentFixture<ProductViewComponent>;
  // let mockedDispatch;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductViewComponent ],
      providers: [
        { provide: Router, useClass: RouterStub },
        provideMockStore({})
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    // mockedDispatch = spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(ProductViewComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
