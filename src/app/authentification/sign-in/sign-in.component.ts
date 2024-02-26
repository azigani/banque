import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SigninService} from '../signin.service';
import {SignInRequest} from '../models/SignInRequest';
import {SignInResponse} from '../models/SignInResponse';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      password: new FormControl('', [Validators.maxLength(50)])
    }
  );

  constructor(private signinService: SigninService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signInForm.valid) {
      const value = this.signInForm.value;
      console.log('avant connexion');
      // this.signinService.connexion(value as SignInRequest ).subscribe(
      //   (data: SignInResponse) => {
      //     console.log(data);
      //   });

      this.signinService.connexion(value as SignInRequest).subscribe(
        (data: SignInResponse) => {
          console.log(data);
        },
        (error) => {
          console.error('Error:', error);
        }
      );

    }

  }
}
