import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminProductItemComponent } from './admin-product-item.component';

describe('AdminProductItemComponent', () => {
  // Arrange 
  let component: AdminProductItemComponent;
  let fixture: ComponentFixture<AdminProductItemComponent>;
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatSelectModule, BrowserAnimationsModule],
      declarations: [AdminProductItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProductItemComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('onAddToCart should work correctly', () => {
    // Arrange
    component.product = {
      id: 1,
      title: 'string',
      description: 'string',
      price: 23,
      isAvalableInStore: true,
    };

    const mockedEditProductEmit = spyOn(component.editProduct, 'emit');

    // Act
    component.onEditProduct();

    // Assert
    expect(mockedEditProductEmit).toHaveBeenCalledWith(component.product);
  });
});
