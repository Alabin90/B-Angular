import { Component,  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EventChildComponentComponent } from '../event-child-component/event-child-component.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  imports:[RouterLink, EventChildComponentComponent, FormsModule,CommonModule],
  selector: 'app-event-parent-component',
  templateUrl: './event-parent-component.component.html',
  styleUrls: ['./event-parent-component.component.css']
})
export class EventParentComponentComponent  {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
 public text=''
public box='blue'
public newtext=''
public data=''
  


  send(){
this .newtext=this.text
this.text=''
  }





receiverresponse(data:any){
  this.data=data
}
}
