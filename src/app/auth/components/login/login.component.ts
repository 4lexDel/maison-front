import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  passwordRegExp!: RegExp;
  response!:string;
  process:boolean = false;

  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const usernameRegExp = /^.{4,13}$/;
    this.passwordRegExp = /^(?=.*\d).{4,16}$/;

    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern(usernameRegExp)]],
      password: [null, [Validators.required, Validators.pattern(this.passwordRegExp)]],
    },
    {
      updateOn: 'blur'      //Refresh le valuechanges lorsque l'on quitte le focus d'un input
    });
  }

  async onSubmitForm() {
    this.process = true;
    console.log(this.loginForm.value.username);
    this.response = await this.auth.login(this.loginForm.value);
    this.process = false;
  }

  register() {
    this.router.navigateByUrl("/auth/register");
  }
}
