import { Component, OnInit } from '@angular/core';

import { ISimpleInterface, Category } from './FirstModel.models';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})

export class FirstComponent implements OnInit {
  public name: string = 'name';
  public description: string = 'description';

  public data: ISimpleInterface[] = [{
  price: 5,
  category: Category.food,
  isAvailable: false,
  }]

  constructor() {

  }

  ngOnInit(): void {

  }

}
