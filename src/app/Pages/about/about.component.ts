import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //Lazy load images

	defaultCEO: string = '../../../assets/images/aboutusCEO.jpeg';
  ceo: string = '../../../assets/images/aboutusCEO.jpeg';
  
	defaultAir: string = '../../../assets/images/airMatters.jpg';
	air: string = '../../../assets/images/airMatters.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
