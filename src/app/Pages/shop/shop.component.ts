import { Component, OnInit } from "@angular/core";
import { MaskService, Mask } from "../../Services/mask.service";

@Component({
	selector: "app-shop",
	templateUrl: "./shop.component.html",
	styleUrls: ["./shop.component.css"],
})
export class ShopComponent implements OnInit {
	defaultMask: string = '../../../assets/images/rsz_quartzgrey.jpg';
	

	mask: Mask[] = [];

	constructor(private _maskService: MaskService) {}

	ngOnInit(): void {
		this.mask = this._maskService.getMask();

	}
}
