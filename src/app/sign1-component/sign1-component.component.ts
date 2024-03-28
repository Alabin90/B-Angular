import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  selector: 'app-sign1-component',
  templateUrl: './sign1-component.component.html',
  styleUrls: ['./sign1-component.component.css']
})

export class Sign1Component {
  step: number = 1;
  userData: any = {};

  constructor(private router: Router) { }

  nextStep() {
    this.step++;
  }

  onSubmit() {
    if (this.step === 1) {
      // Data from first form
      console.log('Form 1 submitted');
      console.log('Data:', this.userData);
      // You can add validation and further processing here
      this.nextStep();
    } else if (this.step === 2) {
      // Data from second form
      console.log('Form 2 submitted');
      console.log('Data:', this.userData);
      // You can add validation and further processing here
      this.nextStep();
    } else if (this.step === 3) {
      // Data from third form
      console.log('Form 3 submitted');
      console.log('Data:', this.userData);
      // You can add validation and further processing here
      // After processing, you can navigate to dashboard
      this.router.navigate(['/dashboard1']);
    }
  }
}

