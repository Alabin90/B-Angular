// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-signup4-component',
//   templateUrl: './signup4-component.component.html',
//   styleUrls: ['./signup4-component.component.css']
// })
// export class Signup4ComponentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component } from '@angular/core';
import { SignupService } from '../services/signup4-service.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  imports:[RouterLink, FormsModule, CommonModule],
  selector: 'app-signup4-component',
  templateUrl: 'signup4-component.component.html',
  styleUrls: ['./signup4-component.component.css']
})
export class SignupComponent {
  firstName: string | undefined;
  lastName: string | undefined;
  age: number | undefined;
  email: string | undefined;

  constructor(private signupService: SignupService) { }

  signUp() {
    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      email: this.email
    };
    this.signupService.signUpUser(userData);
  }
}
