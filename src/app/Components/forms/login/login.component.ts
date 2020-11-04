import { AuthService } from './../../../Services/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
	form: FormGroup;

	constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
		this.createForm();
	}

	ngOnInit(): void {}

	get emailNotValid() {
		return this.form.get("email").invalid && this.form.get("email").touched;
	}

	get passwordNotValid() {
		return (
			this.form.get("password").invalid && this.form.get("password").touched
		);
	}

	createForm() {
		this.form = this.fb.group({
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
		});
	}

	sign() {
		console.log(this.form);

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

    this.auth.login(this.form.value).subscribe(
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
