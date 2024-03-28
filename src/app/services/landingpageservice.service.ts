import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingpageserviceService {

  constructor() { }
  public item='My name is herbert  bella';
  public numberarray: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13]

  returnitem(){
    return this.item
  }
  
  public num(){
    return this.numberarray

  }


  public getSelection(){
    return JSON.parse(localStorage['student'])
}
}