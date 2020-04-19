import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginModalService {

  public isActive = true;

  constructor() { }

  loginModalIsActive(){
    // console.log('1', this.isActive);
    this.isActive = !this.isActive;
    return this.isActive;
  }
}
