import { Component } from '@angular/core';
import AOS from 'aos';
import { AuthService } from './Services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'airmaski';

  ngOnInit(): void {
    AOS.init();
    
	}
   
}


