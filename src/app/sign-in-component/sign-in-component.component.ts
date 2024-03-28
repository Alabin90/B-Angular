import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';


interface Studentid {
  firstname: string;
  lastname: string;
  age: number;
  email: string;
  address: string;
  password: string;
  message : string;
}

@Component({
  selector: 'app-sign-in-component',
  standalone: true,
  imports: [ RouterLink,CommonModule,FormsModule],
  templateUrl: './sign-in-component.component.html',
  styleUrls: ['./sign-in-component.component.css']
})
export class SignInComponentComponent  {

  constructor(public routes:Router) { }
public email=''
public password=''
public message=''

public studentarray:Studentid[] = [];

  ngOnInit() {
    this.studentarray= JSON.parse(localStorage["student"]);
    console.log(this.studentarray);
    
  }
signin(){
  let currentStudent = this.studentarray.find((student, index)=>this.email==student.email && this.password== student.password) ;
  console.log(currentStudent);
  if (currentStudent) {
    console.log('user found');
    localStorage.setItem('currentStudent',JSON.stringify(currentStudent)); 
    this.routes.navigate(['/dashboard1'])
    
  }else{
    this.message='user not found'
  }
  
}


}
