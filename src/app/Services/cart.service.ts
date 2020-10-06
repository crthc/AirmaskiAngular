import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class CartService {
	items = [];

	addToCart(product) {
		this.items.push(product);
	}

	getItems() {
		return this.items;
	}

	clearCart() {
		this.items = [];
		return this.items;
	}

	clearItem(product) {
		const index: number = this.items.indexOf(product);
		if (index !== -1) {
			this.items.splice(index, 1);
		}
	}

	constructor() {}
}
