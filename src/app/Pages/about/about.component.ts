import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  //Lazy load images

	defaultWoman: string = '../../../assets/images/aboutusimg_rsz.jpg';
  woman: string = '../../../assets/images/AboutUsIMG.jpg';

	defaultCEO: string = '../../../assets/images/rsz_aboutusceo.jpg';
  ceo: string = '../../../assets/images/aboutusCEO.jpeg';
  
	defaultAir: string = '../../../assets/images/rsz_airmatters.jpg';
	air: string = '../../../assets/images/airMatters.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
