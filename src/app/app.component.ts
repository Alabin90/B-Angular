import { CarcomponentComponent } from './Carcomponent/Carcomponent.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './LandingPage/LandingPage.component';
import { ServicescomponentComponent } from './LandingPage/servicescomponent/servicescomponent.component';
import { SignUpComponentComponent } from './sign-up-component/sign-up-component.component';
import { SignInComponentComponent } from './sign-in-component/sign-in-component.component';
import { DashboardComponentComponent } from './Dashboard-component/Dashboard-component.component';
import { TemplatedrivenformComponentComponent } from './templatedrivenform-component/templatedrivenform-component.component';
import { ReactiveFromComponentComponent } from './reactiveFrom-component/reactiveFrom-component.component';
import { Sign1Component } from './sign1-component/sign1-component.component';
import { BehaviorParentComponentComponent } from './behavior-parent-component/behavior-parent-component.component';
import {  Behaviorchild1Componentcomponet } from './behaviorchid1-component/behaviorchid1-component.component';
import { Behaviorchild2ComponentComponent } from './behaviorchild2-component/behaviorchild2-component.component';
import { SignupComponent } from './signup4-component/signup4-component.component';
import { UserDetailsComponent } from './user-details-component/user-details-component.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { PipeComponentComponent } from './pipe-component/pipe-component.component';
import { EventChildComponentComponent } from './event-child-component/event-child-component.component';
import { EventParentComponentComponent } from './event-parent-component/event-parent-component.component';
import { NewAppComponent } from './new-App/new-App.component';
import { BackendComponentComponent } from './backend-component/backend-component.component';




interface objectname {
  firstname: string,
  lastname: string,
  age: number,

}


interface Objectname2 {
  firstname: string,
  lastname: string,
  age: number,
  address: string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet , CommonModule , RouterLink,  LandingPageComponent, 
    CarcomponentComponent,ServicescomponentComponent, BackendComponentComponent,
    SignUpComponentComponent,SignInComponentComponent,
     DashboardComponentComponent ,TemplatedrivenformComponentComponent, 
     ReactiveFromComponentComponent, Sign1Component,BehaviorParentComponentComponent , 
     Behaviorchild1Componentcomponet, Behaviorchild2ComponentComponent , SignupComponent, UserDetailsComponent, 
     ParentComponentComponent , PipeComponentComponent,EventChildComponentComponent,EventParentComponentComponent, NewAppComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ANGULAR';
// any asept all datatypes
public school : any = false


  public firstname = "sma"
  private lastname = "sun"
  public age = 30
  public bool = true
  public firststyling= "form-control  p"

  public address: string = 'No 10, ogbomosho, oy State, Nigeria'
  public email: string = 'gon02@gmail.com'
public special = true

  public obj1: objectname = {
    firstname: 'John',
    lastname: 'fred',
    age: 20
  }


  public array1: number[] = [46, 56, 45, 78]
  public array2: string[] = ['oyin', 'sayo', 'lola', 'olamides']
  public array3: (string | number | boolean)[] = ['oyin', 40, true]
  public array4: Objectname2[] = [
    {
      firstname: 'John',
      lastname: 'rom',
      age: 20,
      address: 'iwo'
    },
    {
      firstname: 'done',
      lastname: 'fred',
      age: 20,
      address: 'sabo'
    }
  ]

  check(){
    this.special=!this.special
    console.log(this.special);

  }

  checkindex(index:number){
console.log(index);

  }

  ngOnInit() {
    this.firstname = 'tobi'
    // console.log(this.firstname);
    // console.log(this.obj1);


    console.log(this.array4[0].firstname);
    console.log(this.array4[1].firstname);
  }
  // union, infrence, interface


  
}
