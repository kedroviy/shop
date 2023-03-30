# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0-Introduction]

### Added 

- 1. Added Install Angular CLI
- 2. Created project
- 3. Created FirstComponent
- 4. Added few simple properties like 'name', 'description', 'price', 'category', 'isAvailable' with types
- 5. Created ProductComponent
- 6. Created ProductService, ProductListComponent. Implemented show item on the table wit *ngFor
- 7. Created CartListComponent, CartService. Implemented *ngIf + else, *ngFor + trackBuy.
- 8. Implemented remove items from cart.
- 9. Implemented changelog.md file.
- 10. Upload project on github. 

## [2.0-Components]

### Added

- 1. Multi-module application.
- 2. product the item is provided to the component using the method getProducts();
- 3. The ability to add product to the cart
- 4. In CartService added 2 new mothods: totalCost(); and totalQuantity();
- 5. In Cart we can see total cost and total quantity of all products.
- 6. For Cart Item realiseted ability for increase and decrease product quantity.
- 7. Use @Input(), @Output() decorators.
- 8. For CartItem component added OnPush ChangeDetectionStrategy.
- 9. Use more component-hooks
- 10. For buttons use DOM events.
- 11. Header in AppComponent set from hook ngAfterViewInit, use decorator @ViewChild for this.
- 12. For hover effect on cart items created shared derective with @HostListening and @HostBinding decorators.
- 13. If try add alredy exist prudct in cart we get console message about it and happen nothing. 

## [3.0-Services]

### Added

## [4.0-Pipes]

### Added

1. Use default pipes like uppercase, currency.
2. getProducts() return Observable. Use async pipe.
3. Created OrderByPipe for sort items. Use in cart list.
4. OrderdByPipe in SharedModule.
5. Use in cart-list.
6. FormsModule exported from SharedModule.
7. changelog updated.

## [8.0-Forms]

### Added

1. Realized reactive-form in PressOrderComponent.
2. Added validation for FirstName, Email
3. Added directive appOnlyNumbers for phone field.
4. Added ability for add phone numbers.
5. Added validate message from another file(for firstName).
6. Checkbox SELF_DELIVERY can show/hide SHIPPING_ADRESS field(if hide - SHIPPING_ADRESS not required, if show - required)

## [9.0-Unit-Tests]

### Added

1. Tests for product, cart, admin.
2. Isolate tests for services.
3. Isolate tests for orderByPipe.
4. Shallow test for AppComponent.
5. Added Coverage report.

Coverage summary 
Statements   : 47.4% ( 128/270 )
Branches     : 27.58% ( 8/29 )
Functions    : 23.71% ( 23/97 )
Lines        : 44.62% ( 108/242 )
