// import { Injectable } from '@angular/core';


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private usersDataSubject = new BehaviorSubject<any[]>([]);
  usersData$ = this.usersDataSubject.asObservable();

  constructor() { }

 

  signUpUser(userData: any) {
    const upUsersData = [...this.usersDataSubject.value, userData];
    this.usersDataSubject.next(upUsersData);
  }


}


