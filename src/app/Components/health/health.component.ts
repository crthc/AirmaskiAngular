import { Component, OnInit } from "@angular/core";
import { Covid19Service } from "../../Services/covid19.service";

@Component({
	selector: "app-health",
	templateUrl: "./health.component.html",
	styleUrls: ["./health.component.css"],
})
export class HealthComponent implements OnInit {
	covid: any = [];
	covidCountry: any = [];

	countryCases: number;
	countryNewCases: number;
	countryDeaths: number;
	countryNewDeaths: number;
	peopleRecovered: number;
	activeCases: number;
	criticalCases: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;

	selectedValue: string;

	constructor(private covid19service: Covid19Service) {}

	ngOnInit(): void {
		this.covid19service.getCountry().subscribe((data) => {
			this.covidCountry = data;
			this.covidCountry.unshift({
				country: "Select country",
			});
		});
	}

	onOptionsSelected(value: any) {
		this.customFunction(value);
	}

	customFunction(value: any) {
		this.countryCases = value.cases;
		this.countryNewCases = value.todayCases;
		this.countryDeaths = value.deaths;
		this.countryNewDeaths = value.todayDeaths;
		this.peopleRecovered = value.recovered;
		this.activeCases = value.active;
		this.criticalCases = value.critical;
		this.casesPerOneMillion = value.casesPerOneMillion;
		this.deathsPerOneMillion = value.deathsPerOneMillion;
	}
}
