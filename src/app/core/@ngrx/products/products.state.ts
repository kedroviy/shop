import { ProductModel } from 'src/app/products/models/product.model';

export interface ProductsState {
 data: ReadonlyArray<ProductModel>;
}
export const initialProductsState: ProductsState = {
 data: []
};
