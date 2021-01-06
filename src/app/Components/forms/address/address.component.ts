import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../../Services/country.service";
import { ValidatorsService } from "../../../Services/validators.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  form: FormGroup;
	
	countries: any[] = [];

	constructor(
		private fb: FormBuilder,
		private countryService: CountryService,
		private validators: ValidatorsService,
		private auth: AuthService,
		private router: Router
	) {
		this.createForm();
		
	}

	ngOnInit(): void {
		console.log(this.auth.authenticated());
		this.countryService.getCountries().subscribe((countries) => 
			this.countries = countries
			);

	}

	get addressNotValid() {
		return this.form.get("address").invalid && this.form.get("address").touched;
	}

	get cityNotValid() {
		return (
			this.form.get("city").invalid && this.form.get("city").touched
		);
	}
  
	get countryNotValid() {
    return this.form.get("country").invalid && this.form.get("country").touched;
	}
  
  get zipNotValid() {
    return this.form.get("zip").invalid && this.form.get("zip").touched;
  }
	createForm() {
		this.form = this.fb.group(
			{
				address: ["", [Validators.required, Validators.minLength(2)]],
				city: ["", [Validators.required, Validators.minLength(2)]],
				zip: ["", [Validators.required, Validators.minLength(4)]],
				country: ["", [Validators.required]],
			},
		);
		
	}

	sign() {
		console.log(this.form.value);
		
		if (this.form.invalid) {
			return Object.values(this.form.controls).forEach((control) => {
				control.markAsTouched();
			});
		}

		Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'wait please...',
    });
		Swal.showLoading();
		
		this.auth.newUser(this.form.value).subscribe(
      (resp) => {
        console.log(resp);
        Swal.close();
        this.router.navigateByUrl('/shop');
      },
      (err) => {
        console.log(err.error.error.message);
        Swal.fire({
          icon: 'error',
          title: 'Authentication error',
          text: err.error.error.message,
        });
      }
    );
	}

}
