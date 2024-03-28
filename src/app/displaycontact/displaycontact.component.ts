import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-displaycontact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './displaycontact.component.html',
  styleUrl: './displaycontact.component.css'
})
export class DisplaycontactComponent {
constructor(public activated:ActivatedRoute, public route:Router){}
public index=0
contactarray=[]
ngOnInit(){
  this.contactarray=JSON.parse(localStorage['contact'])
console.log(this.contactarray);



this.index=this.activated.snapshot.params['i'];
console.log(this.index);


console.log(this.contactarray[this.index]); 

}

check(){
// this.route.navigate(['home'])
}
}
