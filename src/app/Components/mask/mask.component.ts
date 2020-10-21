import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaskService } from '../../Services/mask.service';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-mask',
  templateUrl: './mask.component.html',
  styleUrls: ['./mask.component.css'],
})
export class MaskComponent implements OnInit {
  mask: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _maskService: MaskService,
    private cartService: CartService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.mask = this._maskService.getMaski(params['id']);
      console.log(this.mask);
    });
  }
  number = 0;
  added(mask) {
    this.cartService.addToCart(mask);

    let button = document.getElementById('button') as HTMLInputElement;

    this.number++;
    button.textContent = `Added to basket + ${this.number.toString()}`;
  }

  ngOnInit(): void {}
}
