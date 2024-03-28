// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user-info-component',
//   templateUrl: './user-info-component.component.html',
//   styleUrls: ['./user-info-component.component.css']
// })
// export class UserInfoComponentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
  
import { Subscription } from 'rxjs';

import { Component } from '@angular/core';
import { SignupService } from '../services/signup4-service.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [RouterLink , FormsModule, CommonModule],
  selector: 'app-user-info',
  templateUrl: './user-info-component.component.html',
  styleUrls: ['./user-info-component.component.css'],
})
export class UserInformationComponent {
  usersData: any[] | undefined;

  constructor(private signupService: SignupService) {
    this.signupService.usersData$.subscribe(usersData => {
      this.usersData = usersData;
    });


    
  }
}
