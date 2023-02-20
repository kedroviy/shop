import { Component, OnInit, DoCheck } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit, DoCheck {
  totalQuantity: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  
  }

  ngDoCheck(): void {
    this.totalQuantity = this.cartService.totalQuantity();
  }
}
