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
  
  mountain: string = "../../../assets/images/mnt-story2.jpg";
  defaultMNT: string = "../../../assets/images/defaultmnt.png";

	defaultAir: string = '../../../assets/images/rsz_airmatters.png';
	air: string = '../../../assets/images/airMatters.jpg';

  constructor() { }

  ngOnInit(): void {
   
  }

}
