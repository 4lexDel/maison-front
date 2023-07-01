import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertComponent } from 'src/app/shared/components/alert/alert.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("dangerAlert") dangerAlert!: AlertComponent;

  registerForm!: FormGroup;
  passwordRegExp!:RegExp;
  response!:string;
  process:boolean = false;

  constructor(private auth: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const usernameRegExp = /^.{4,13}$/;
    this.passwordRegExp = /^(?=.*\d).{4,16}$/;

    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.pattern(usernameRegExp)]],
      password: [null,  [Validators.required, Validators.pattern(this.passwordRegExp)]],
      confirmPassword: [null,  [Validators.required]]
    });
  }

  async onSubmitForm() {
    if(this.registerForm.valid){
      this.process = true;
      console.log(this.registerForm.value.username);
  
      if(this.registerForm.value. password != this.registerForm.value.confirmPassword){
        this.dangerAlert.activateAlert(2, "Mot de passe et confirmation différents !");
      }
      else {
        let response = await this.auth.register(this.registerForm.value);

        if(response == "1"){
          this.router.navigateByUrl('/auth/login');   
        }
        else{
          this.dangerAlert.activateAlert(2, response);
        }
      }
  
      this.process = false;
    }
  }

  login(){
    this.router.navigateByUrl("/auth/login");
  }
}
