import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
    let service: CartService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CartService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getViewProductItem should return totalLengthOfCart', () => {
        const mockedLength = 3;

        service.totalLengthOfCart = mockedLength;

        const result = service.returnTotalLength();

        expect(result).toEqual(mockedLength);
    });

    it('should set the totalLengthOfCart property to the given length', () => {
        const mockedProduct = 12;

        service.addToTotalQuantity(mockedProduct);

        expect(service.totalLengthOfCart).toEqual(mockedProduct);
    });

    it('should return true if cartList is empty', () => {
        service.cartList = [];

        const result = service.isEmptyCart();

        expect(result).toBeTruthy();
    });

    it('should return false if cartList not empty', () => {
        service.cartList = [{
            id: 1,
            title: 'milk',
            description: 'bdgdg',
            price: 23,
            isAvalableInStore: true
        }];

        const result = service.isEmptyCart();

        expect(result).toBeFalsy();
    });
});