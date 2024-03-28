import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive,  } from '@angular/router';





interface Mainname {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  address: string;
}

@Component({
  selector: 'app-LandingPage',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterLink ],
  templateUrl: './LandingPage.component.html',
  styleUrls: ['./LandingPage.component.css'],
})
export class LandingPageComponent {
  public first_name = '';
  public last_name = '';
  public email = '';
  public phone_number = '';
  public address = '';
  public gender = '';
  public style = 'form-control my-3';


  public Contacts: Mainname[] = [];

  constructor() {
    const StoredContacts = localStorage.getItem('contact');
    if (StoredContacts) {
      this.Contacts = JSON.parse(StoredContacts);
    }
  }
  
 
  
  addContact() {
    const user: Mainname = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      phone_number: this.phone_number,
      address: this.address,
      gender: this.gender,
    };

    this.Contacts.push(user);
    console.log(this.Contacts);
    localStorage.setItem('contact', JSON.stringify(this.Contacts));
  }

    // selectedContactIndex: number = 1; 
  de(i:number){
console.log(i);

  let x=this.Contacts = this.Contacts.filter((_contact, index) => index !=i);
  console.log(x);
  this.Contacts
    localStorage.setItem('contact', JSON.stringify(this.Contacts));
  }
  ed(){
alert (`Contact`)
 
  }

 vi(){
    
  }
  
}


