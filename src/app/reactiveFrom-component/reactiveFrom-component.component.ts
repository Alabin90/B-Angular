import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormBuilder,  ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reactiveFrom-component',
  standalone : true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveFrom-component.component.html',
  styleUrls: ['./reactiveFrom-component.component.css']
})
export class ReactiveFromComponentComponent  {

  public firstname : any
  constructor(public formbuilder:FormBuilder) { }
public formone=this.formbuilder.group({
  firstname:['BELLA', Validators.required],
  email: ['', Validators.required],
  password:['', Validators.required]
})

  ngOnInit() {
    console.log(this.formone.value);
    this.firstname=this.formone.value['email'];
    console.log(this.firstname);
    this.formone.controls['firstname'].setValue('');
    this.formone.controls['email'].setValue('');
    this.formone.controls['email'].setValue('');
    this.formone.controls['password'].setValue('0')
    
    
  }

}
