import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartIconComponent implements OnInit {
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.totalQuantity = this.cartService.returnTotalLength();
  }

}
