import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Studentid {
  firstname: string;
  lastname: string;
  age: string;
  email: string;
  address: string;
  password: string;
  
}

@Component({
  selector: 'app-sign-up-component',
  standalone: true,
  imports: [ RouterLink,CommonModule,FormsModule],
  templateUrl: './sign-up-component.component.html',
  styleUrls: ['./sign-up-component.component.css']
})
export class SignUpComponentComponent {

  constructor(public routes: Router) { }

  public firstname = '';
  public lastname = '';
  public age = '';
  public email = '';
  public address = '';
  public password = '';
  public message = '';

  public studentarray: Studentid[] = [];

  signup() {
    let studentobj = {
      firstname: this.firstname,
      lastname: this.lastname,
      age: this.age,
      email: this.email,
      address: this.address,
      password: this.password
    };

    // console.log(studentobj);
    this.studentarray.push(studentobj);

    localStorage.setItem('student', JSON.stringify(this.studentarray));

    if (this.studentarray) {
      this.routes.navigate(['/signin']);
    } else {
      this.message = 'user not found';
    }
  }
}
