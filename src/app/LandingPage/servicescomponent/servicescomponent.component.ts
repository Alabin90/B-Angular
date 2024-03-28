import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LandingpageserviceService } from '../../services/landingpageservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicescomponent',
  standalone: true,
  imports :[RouterLink , CommonModule],
  templateUrl: './servicescomponent.component.html',
  styleUrls: ['./servicescomponent.component.css']
})
export class ServicescomponentComponent implements OnInit  {

  constructor(public service:LandingpageserviceService,) { }
public user='Honeycomb'
  ngOnInit() {
    console.log(this.service.returnitem());
    console.log(this.service.num());
    this.user=this.service.returnitem()
    console.log(this.user);
    
    console.log(this.service.item);
    
  }

}
