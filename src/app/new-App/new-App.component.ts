import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  selector: 'app-new-App',
  templateUrl: './new-App.component.html',
  styleUrls: ['./new-App.component.css']
})
export class NewAppComponent  {

  constructor() { }
  

  ngOnInit() {
  }

}
