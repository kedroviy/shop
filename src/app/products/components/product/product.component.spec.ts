import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  // Arrange 
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatSelectModule, BrowserAnimationsModule],
      declarations: [ProductComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
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
    const product = {
      id: 1,
      title: 'string',
      description: 'string',
      price: 23,
      isAvalableInStore: true,
    };

    const mockedBoughtProductEmit = spyOn(component.boughtProduct, 'emit');

    // Act
    component.onAddToCart(product);

    // Assert
    expect(mockedBoughtProductEmit).toHaveBeenCalledWith(product);
  });

  it('onViewProduct should work correctly', () => {
    // Arrange
    const product = {
      id: 1,
      title: 'string',
      description: 'string',
      price: 23,
      isAvalableInStore: true,
    };
    
    const mockedProductViewEmit = spyOn(component.productView, 'emit');
    // Act
    component.onViewProduct(product);

    // Assert
    expect(mockedProductViewEmit).toHaveBeenCalledWith(product);
  });
});
