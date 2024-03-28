import { Component,  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-Dashboard-component',
  standalone: true,
  imports: [RouterLink,  ],
  templateUrl: './Dashboard-component.component.html',
  styleUrls: ['./Dashboard-component.component.css']
})
export class DashboardComponentComponent  {

  constructor() { }

  ngOnInit() {
  }

}
 