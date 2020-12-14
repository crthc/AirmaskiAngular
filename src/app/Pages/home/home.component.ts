import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  defaultHome: string = '../../../assets/images/homeimage_rsz.jpg';
  home: string = '../../../assets/images/homeImage2.jpg';

  defaultMask: string = '../../../assets/images/whyMasks-2.jpg';
  maskImg: string = '../../../assets/images/whyMasks.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
