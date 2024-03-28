import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  imports:[  HttpClientModule, FormsModule, CommonModule],
  selector: 'app-backend-component',
  templateUrl: './backend-component.component.html',
  styleUrls: ['./backend-component.component.css']
})
export class BackendComponentComponent  {
  public data: any;
  public msg: any;

  constructor(public http:HttpClient) { }

    ngOnInit() {
      let obj={
       firstname:"herbertola",
        email: 'alabin900@gmail.com',
        lastname:'bella900',
        address:'wogon west gate',
        password: '1222'

      }
    
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=> {
      this.data=data
      console.log(this.data);

    } ,((error: any)=>{
      console.log(error);
      
    })
   )

   this.http.post('http://localhost/captain/frontend.php', obj).subscribe
   ((data:any)=>{
    console.log(data);
    if (data.status==false) {
      this.msg=data.message
      console.log(this.msg);
      
    }
   }, (error=>{
    console.log(error);
    
   }))
  
  }

}
