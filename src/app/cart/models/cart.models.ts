export interface CartList {
  id: number,
  title: string,
  description: string,
  price: number,
  isAvalableInStore: boolean,
  quantity?: number,
}
