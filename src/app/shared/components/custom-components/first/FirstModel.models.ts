export enum Category  {
  food = 'food',
  home = 'home',
  zoo = 'zoo',
}

export interface ISimpleInterface {
  price: number;
  category: Category,
  isAvailable: boolean;
}
