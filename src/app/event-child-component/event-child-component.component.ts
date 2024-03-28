import { CommonModule } from '@angular/common';
import { Component,EventEmitter,Input,Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  standalone:true,
  imports:[RouterLink,CommonModule,FormsModule,],
  selector: 'app-event-child-component',
  templateUrl: './event-child-component.component.html',
  styleUrls: ['./event-child-component.component.css']
})
export class EventChildComponentComponent  {
@Input() public recivetext: any;
public sendresponse=''
  @Output() public eventemit= new EventEmitter

  send(){
    this.eventemit.emit(this.sendresponse)
    this.sendresponse=''
  }

}
