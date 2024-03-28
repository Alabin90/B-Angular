// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-user-details-component',
//   templateUrl: './user-details-component.component.html',
//   styleUrls: ['./user-details-component.component.css']
// })
// export class UserDetailsComponentComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SignupService } from '../services/signup4-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports:[ RouterLink, FormsModule,CommonModule],
  selector: 'app-user-details',
  templateUrl: './user-details-component.component.html',
  styleUrls: ['./user-details-component.component.css'],
})
export class UserDetailsComponent implements OnDestroy {
  user: any;
  private userDataSubscription: Subscription;

  constructor(private signupService: SignupService) {
    this.userDataSubscription = this.signupService.usersData$.subscribe(userData => {
      this.user = userData;
    });
  }

  ngOnDestroy() {
    this.userDataSubscription.unsubscribe();
  }


  UserDetails(user: any) {
    // You can handle displaying user details in another component or modal
    console.log(user);
}
} 
