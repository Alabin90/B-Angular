import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-templatedrivenform-component',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './templatedrivenform-component.component.html',
  styleUrls: ['./templatedrivenform-component.component.css']
})
export class TemplatedrivenformComponentComponent  {

  constructor() { }

  public firstname ='';
  public city ='';
  public email='';
  public check ='';



  submit(){

  }

  ngOnInit() {


  }

}
