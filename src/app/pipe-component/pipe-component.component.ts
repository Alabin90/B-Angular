import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink,CommonModule],
  selector: 'app-pipe-component',
  templateUrl: './pipe-component.component.html',
  styleUrls: ['./pipe-component.component.css']
})
export class PipeComponentComponent  {

  constructor() { }
public time: any=''

  ngOnInit() {
    this.time =new Date
    console.log(this.time);
    
  }

}
