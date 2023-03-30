import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CartItemComponent } from './cart-item.component';

describe('CartItemComponent', () => {
  // Arrange 
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let de: DebugElement;
  let h2: HTMLElement;
  
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatSelectModule, BrowserAnimationsModule],
      declarations: [CartItemComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartItemComponent);
    component = fixture.componentInstance;

    de = fixture.debugElement.query(By.css('h2'));
    h2 = de.nativeElement;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    // Assert
    expect(component).toBeTruthy();
  });

  it('should have no title in the DOM until manually call `detectChanges`', () => {
    expect(h2.textContent).toEqual('');
  });

  it('onQuantityIncrease should work correctly', () => {
    // Arrange
    const cartItem = {
      id: 1,
      title: 'string',
      description: 'string',
      price: 23,
      isAvalableInStore: true,
    };

    const mockedIncreaseEmit = spyOn(component.increase, 'emit');

    // Act
    component.onQuantityIncrease(cartItem);

    // Assert
    expect(mockedIncreaseEmit).toHaveBeenCalledWith(cartItem);
  });

  it('onQuantityDecrease should work correctly', () => {
    // Arrange
    const cartItem = {
      id: 1,
      title: 'string',
      description: 'string',
      price: 23,
      isAvalableInStore: true,
    };
    
    const mockedDecreseEmit = spyOn(component.decrese, 'emit');
    // Act
    component.onQuantityDecrease(cartItem);

    // Assert
    expect(mockedDecreseEmit).toHaveBeenCalledWith(cartItem);
  });

  it('onDeleteItem should work correctly', () => {
    // Arrange
    component.cartItem = {
        id: 1,
        title: 'string',
        description: 'string',
        price: 23,
        isAvalableInStore: true,
    };
    
    const mockedDeleteHandlerEmit = spyOn(component.deleteHandler, 'emit');
    // Act
    component.onDeleteItem();

    // Assert
    expect(mockedDeleteHandlerEmit).toHaveBeenCalledWith(component.cartItem);
  });
});
