import { CovidCountry } from './../../Services/covid';
import { Component, OnInit } from "@angular/core";
import { Covid19Service } from "../../Services/covid19.service";
import { FormBuilder} from "@angular/forms";
import AOS from 'aos';


@Component({
	selector: "app-health",
	templateUrl: "./health.component.html",
	styleUrls: ["./health.component.css"],
})
export class HealthComponent implements OnInit {
	covid: any = [];
	covidCountry: CovidCountry[] = [];
	
	countryCases: number;
	countryNewCases: number;
	countryDeaths: number;
	countryNewDeaths: number;
	peopleRecovered: number;
	activeCases: number;
	criticalCases: number;
	casesPerOneMillion: number;
	deathsPerOneMillion: number;

	defaultProblem: string = '../../../assets/images/p_rsz.jpg';
	problem: string = '../../../assets/images/p.jpg';
	problemResize: string = '../../../assets/images/min-2.jpg';
	size: boolean;
	
	defaultCovid: string = '../../../assets/images/covid3_rsz.jpg';
	covidImg: string = '../../../assets/images/covid3.png';

	defaultResch: string = '../../../assets/images/maskexperiment_rsz.jpg';
	reschImg: string = '../../../assets/images/maskExperiment.jpeg';


	constructor(private covid19service: Covid19Service, private fb: FormBuilder) {
		this.covid19service.getData().subscribe((data) => {
			this.covid = data;
		});
		this.covid19service.getCountry().subscribe((data) => {
			this.covidCountry = data;
		});
	}

  registrationForm = this.fb.group({
    countryName: ['']
	})
	

	// Choose country using select dropdown
	changeCountry(e) {
	this.countryName.setValue(e.target.value, {
		onlySelf: true
	})
	this.onSubmit();
	}

  get countryName() {
    return this.registrationForm.get('countryName');
	}
	
  onSubmit() {
		this.customFunction(this.registrationForm.value.countryName);

  }

	ngOnInit(): void {
		if (window.screen.width <= 600) {
			this.size = false;
		}else{
			this.size = true;
		}
		AOS.init();
	}
   
	
	customFunction(value: any) {
		this.countryCases= value.cases;
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
