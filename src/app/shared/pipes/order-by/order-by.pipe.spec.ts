import { of } from 'rxjs';

import { OrderByPipe } from './order-by.pipe';

describe('OrderByPipe', () => {
  let orderByPipe: OrderByPipe;

  beforeEach(() => {
    orderByPipe = new OrderByPipe();
  });

  it('should return the input array if no search term is provided', () => {
    const input = of([
      {
        id: 1,
        title: 'milk',
        description: 'bdgdg',
        price: 23,
        isAvalableInStore: true
      },
      {
        id: 4,
        title: 'bread',
        description: 'bdgdg',
        price: 23,
        isAvalableInStore: true
      },
    ]);
    const result = orderByPipe.transform(input, '', true);
    result.subscribe((res) => {
      expect(res).toEqual([
        {
          id: 1,
          title: 'milk',
          description: 'bdgdg',
          price: 23,
          isAvalableInStore: true
        },
        {
          id: 4,
          title: 'bread',
          description: 'bdgdg',
          price: 23,
          isAvalableInStore: true
        }
      ]);
    });
  });

  it('should sort the array in ascending order by the provided search term', () => {
    const input = of([
      {
        id: 1,
        title: 'milk',
        description: 'bdgdg',
        price: 23,
        isAvalableInStore: true
      },
      {
        id: 4,
        title: 'bread',
        description: 'bdgdg',
        price: 23,
        isAvalableInStore: true
      }
    ]);
    const result = orderByPipe.transform(input, 'name', true);
    result.subscribe((res) => {
      expect(res).toEqual([
        {
          id: 1,
          title: 'milk',
          description: 'bdgdg',
          price: 23,
          isAvalableInStore: true
        },
        {
          id: 4,
          title: 'bread',
          description: 'bdgdg',
          price: 23,
          isAvalableInStore: true
        }
      ]);
    });
  });

  it('should sort the array in descending order by the provided search term', () => {
    const input = of([
      {
        id: 1,
        title: 'milk',
        description: 'bdgdg',
        price: 23,
        isAvalableInStore: true
      },
      {
        id: 4,
        title: 'bread',
        description: 'bdgdg',
        price: 23,
        isAvalableInStore: true
      }
    ]);
    const result = orderByPipe.transform(input, 'name', false);
    result.subscribe((res) => {
      expect(res).toEqual([
        {
          id: 1,
          title: 'milk',
          description: 'bdgdg',
          price: 23,
          isAvalableInStore: true
        },
        {
          id: 4,
          title: 'bread',
          description: 'bdgdg',
          price: 23,
          isAvalableInStore: true
        }
      ]);
    });
  });
});
