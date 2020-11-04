import { Component, OnInit } from "@angular/core";
import { MaskService, Mask } from "../../Services/mask.service";

@Component({
	selector: "app-shop",
	templateUrl: "./shop.component.html",
	styleUrls: ["./shop.component.css"],
})
export class ShopComponent implements OnInit {
	mask: Mask[] = [];

	constructor(private _maskService: MaskService) {}

	ngOnInit(): void {
		this.mask = this._maskService.getMask();

		console.log(this.mask);
	}
}
