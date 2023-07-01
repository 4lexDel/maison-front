import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild("dangerAlert") dangerAlert!: AlertComponent;

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
    if(this.loginForm.valid){
      this.process = true;
      console.log(this.loginForm.value.username);
      let response = await this.auth.login(this.loginForm.value);

      this.process = false;

      if(response == "1"){
        this.router.navigateByUrl('/admin');
      }
      else{
        this.dangerAlert.activateAlert(2, response);
      }
    }
  }

  register() {
    this.router.navigateByUrl("/auth/register");
  }
}
