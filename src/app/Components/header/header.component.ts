import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';


@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
	username: string;
	password: string;
	resultado: string;

	open:boolean = false;
	

	constructor(public auth: AuthService, private router: Router) {}

	ngOnInit(): void {}

	formularioLogin = new FormGroup({
		username: new FormControl("", [Validators.required]),
		password: new FormControl("", [Validators.required]),
	});

	/**
	 * Process the form we have. Send to whatever backend
	 * Only alerting for now
	 */
	processForm() {
		if (this.formularioLogin.valid) {
			const allInfo = `Username: ${this.username}. Pwd: ${this.password}.`;
			this.resultado = allInfo;
		} else {
			this.resultado = "Hay datos inválidos en el formulario";
		}
	}

	out() { 
		this.auth.logout();
    this.router.navigateByUrl('/home');
	}
	
	toggleClass(){
		this.open = !this.open;
	}
}
