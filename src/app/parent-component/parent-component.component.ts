import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup4-component/signup4-component.component';
import { UserDetailsComponent } from '../user-details-component/user-details-component.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UserInformationComponent } from '../user-info-component/user-info-component.component';

@Component({
  standalone:true,
  imports: [RouterLink, SignupComponent, UserDetailsComponent, UserInformationComponent, FormsModule, CommonModule ],
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
