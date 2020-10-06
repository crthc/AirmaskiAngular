import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  get emailNotValid() {
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  get subjectNotValid() {
    return this.form.get('subject').invalid && this.form.get('subject').touched;
  }

  get textMsgNotValid() {
    return this.form.get('textMsg').invalid && this.form.get('textMsg').touched;
  }

  createForm() {
    this.form = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      subject: ['', Validators.required],
      textMsg: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  sign() {
    console.log(this.form);

    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach((control) => {
        control.markAsTouched();
      });
    }
  }
}
