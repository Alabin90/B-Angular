import { Component,  } from '@angular/core';
import { Behaviorchild1Componentcomponet } from '../behaviorchid1-component/behaviorchid1-component.component';
import { Behaviorchild2ComponentComponent } from '../behaviorchild2-component/behaviorchild2-component.component';

@Component({
  standalone: true,
  imports:  [ Behaviorchild1Componentcomponet, Behaviorchild2ComponentComponent ],
  selector:  'app-behavior-parent-component',
  templateUrl: './behavior-parent-component.component.html',
  styleUrls: ['./behavior-parent-component.component.css']
})
export class BehaviorParentComponentComponent  {

  constructor() { }

  ngOnInit() {
  }

}
