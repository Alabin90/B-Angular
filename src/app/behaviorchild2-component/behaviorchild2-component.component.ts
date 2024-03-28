import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  imports:[ FormsModule, CommonModule],
  selector: 'app-behaviorchild2-component',
  templateUrl: './behaviorchild2-component.component.html',
  styleUrls: ['./behaviorchild2-component.component.css']
})
export class Behaviorchild2ComponentComponent {
  constructor(public behavior:BehaviorService){}
  public behavior_obj=<any>{}
  ngOnInit(){
    console.log( this.behavior.behavior);
    this.behavior.behavior.subscribe(response=>{
      console.log(response);
      this.behavior_obj=response
      console.log(this.behavior_obj);
      
    
    })
  
  }
  }
