import { Component, OnInit } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items;
  total = 0;

  constructor(private cartService: CartService) {}

  clearItem(product) {
    this.cartService.clearItem(product);
    this.total -= product.price;
  }
  clearCart() {
    this.items = this.cartService.clearCart();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items.forEach((item) => {
      this.total += item.price;
    });
  }
}
