import { Component, OnInit } from "@angular/core";
import { latLng, MapOptions, tileLayer, Map, Marker, icon } from "leaflet";

@Component({
	selector: "app-location",
	templateUrl: "./location.component.html",
	styleUrls: ["./location.component.css"],
})
export class LocationComponent implements OnInit {
	map: Map;
	mapOptions: MapOptions;

	constructor() {}

	ngOnInit() {
		this.initializeMapOptions();
	}

	onMapReady(map: Map) {
		this.map = map;
		this.addSampleMarker();
	}

	private initializeMapOptions() {
		this.mapOptions = {
			center: latLng(41.39326695448821, 2.1632364392280583),
			zoom: 13,
			layers: [
				tileLayer(
					"https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png",
					{
						maxZoom: 18,
						attribution:
							'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
					}
				),
			],
		};
	}

	private addSampleMarker() {
		const marker = new Marker([41.39406695449921, 2.1632364392280583]).setIcon(
			icon({
				iconSize: [26, 35],
				iconAnchor: [13, 41],
				iconUrl: "assets/marker-icon.png",
			})
		);
		marker
			.addTo(this.map)
			.bindPopup(
				"<b>Airmaski Store</b><br>Paseo de Gracia, 80, 08008 Barcelona"
			);
	}
}
