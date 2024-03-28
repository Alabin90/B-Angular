import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-Carcomponent',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink ],
  templateUrl: './Carcomponent.component.html',
  styleUrls: ['./Carcomponent.component.css']
})
export class CarcomponentComponent {

  constructor() { }

  ngOnInit() {
  }

}
