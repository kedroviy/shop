// import { ProductModel } from "src/app/products/models/product.model";

export interface CartList {
  id: number,
  title: string,
  description: string,
  price: number,
  isAvalableInStore: boolean,
  quantity?: number,
}
// более короткий вариант
// export interface CartList extends ProductModel {
//   quantity?: number,
// }
