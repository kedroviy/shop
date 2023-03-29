import { TestBed } from '@angular/core/testing';

import { ProductModel } from '../models/product.model';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
    let service: ProductsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ProductsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('getViewProductItem should return showItem if it exist', () => {
        const mockedProduct = {
            id: 1,
            title: 'milk',
            description: 'bdgdg',
            price: 23,
            isAvalableInStore: true
        };

        service.showItem = mockedProduct;

        const result = service.getViewProductItem();

        expect(result).toEqual(mockedProduct);
    });

    it('should return undefined if showItem does not exist', () => {
        const result = service.getViewProductItem();

        expect(result).toBeUndefined();
    });

    it('should set the showItem property to the given product', () => {
        const mockedProduct: ProductModel = {
            id: 1,
            title: 'milk',
            description: 'bdgdg',
            price: 23,
            isAvalableInStore: true
        };

        service.setViewProductItem(mockedProduct);

        expect(service.showItem).toEqual(mockedProduct);
    });
});