import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { PasswordMatcher } from "../../shared/password-matcher";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.scss"],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group(
      {
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        email: ["", [Validators.required], Validators.email],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", [Validators.required]],
      },
      { validator: PasswordMatcher.match }
    );
  }

  signup() {
    console.log("---form", this.signupForm.value);
  }
}
