import { Component, OnInit } from '@angular/core';
import { BehaviorService } from '../services/behavior.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  imports:[FormsModule, CommonModule],
  selector: 'app-behaviorchid1-component',
  templateUrl: './behaviorchid1-component.component.html',
  styleUrls: ['./behaviorchid1-component.component.css']
})
export class Behaviorchild1Componentcomponet {
  constructor(public behavior:BehaviorService){}
public behavior_array:any=[
  {
    firstname:'Johnson',
    lastname:'Isreal',
    age:'45',
    email:'Isreal@gmail.com',
  },
  {
    firstname:'Elon',
    lastname:'Musk',
    age:'46',
    email:'elonmusk@gmail.com',
  },
  {
    firstname:'Captain',
    lastname:'College',
    age:'12',
    email:'captain@gmail.com',
  },
  {
    firstname:'Captain',
    lastname:'College',
    age:'12',
    email:'captain@gmail.com',
  },
  {
    firstname:'Captain',
    lastname:'College',
    age:'12',
    email:'captain@gmail.com',
  },
  {
    firstname:'Captain',
    lastname:'College',
    age:'12',
    email:'captain@gmail.com',
  }
]
sendlist(list:any){
console.log(list);
this.behavior.behavior.next(list)

}
}