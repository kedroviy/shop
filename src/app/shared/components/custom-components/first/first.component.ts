import { Component, OnInit } from '@angular/core';

import { ISimpleInterface, Category } from './FirstModel.models';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {
  // обычно не используют мождификатор public для полей и методов класса,
  // если они публичны, так как они публичны по-умолчанию
  name: string = 'name';
  description: string = 'description';

  data: ISimpleInterface[] = [{
    price: 5,
    category: Category.food,
    isAvailable: false,
  }]

  constructor() {

  }

  ngOnInit(): void {

  }

}
