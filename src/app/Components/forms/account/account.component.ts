import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from "@angular/core";
import { CountryService } from "../../../Services/country.service";
import { ValidatorsService } from "../../../Services/validators.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
	selector: "app-account",
	templateUrl: "./account.component.html",
	styleUrls: ["./account.component.css"],
})
export class AccountComponent implements OnInit {
	form: FormGroup;
	open: string;
	
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
		this.countryService.getCountries().subscribe((countries) => {
			this.countries = countries;
			this.countries.unshift({
				name: "Select country",
				code: "",
			});
			
		});

	}

	get nameNotValid() {
		return this.form.get("name").invalid && this.form.get("name").touched;
	}

	get lastNameNotValid() {
		return (
			this.form.get("lastName").invalid && this.form.get("lastName").touched
		);
	}

	get emailNotValid() {
		return this.form.get("email").invalid && this.form.get("email").touched;
	}

	get passwordNotValid() {
		return (
			this.form.get("password").invalid && this.form.get("password").touched
		);
	}

	get confirmPasswordNotValid() {
		const password = this.form.get("password").value;
		const confirmPassword = this.form.get("confirmPassword").value;

		return password === confirmPassword ? false : true;
	}

	get countryNotValid() {
		return this.form.get("country").invalid && this.form.get("country").touched;
	}

	createForm() {
		this.form = this.fb.group(
			{
				lastName: ["", [Validators.required, Validators.minLength(2)]],
				name: ["", [Validators.required, Validators.minLength(2)]],
				email: [
					"",
					[
						Validators.required,
						Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
					],
				],
				password: [
					"",
					[
						Validators.required,
						Validators.minLength(8),
						Validators.maxLength(20),
					],
				],
				confirmPassword: [
					"",
					[
						Validators.required,
						Validators.minLength(8),
						Validators.maxLength(20),
					],
				],
				country: ["", [Validators.required]],
			},
			{
				validators: this.validators.samePasswords(
					"password",
					"confirmPassword"
				),
			}
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
				this.open = 'false';
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

