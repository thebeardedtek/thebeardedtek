import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getHeight(){
    return window.innerHeight;
  }

  getWidth(){
    return window.innerWidth;
  }

  removeWhiteSpace(value) {
    value = value.toString().replace(' ', '').replace(/\s/g,'');
    return value;
  }

  trimStart(value) {
    value = value.toString().trimStart();
    return value;
  }

  trimEnd(value) {
    value = value.toString().trimEnd();
    return value;
  }

  trimAll(value) {
    value = value.toString().trim();
    return value;
  }

  stripTags(value) {
    value = value.replace(/<[^>]*>/g, '');
    value = this.trimAll(value);
    value = this.removeWhiteSpace(value);
    return value;
   }

   stripTagsOnly(value) {
    value = value.replace(/<[^>]*>/g, '');
    return value;
   }

   isValidEmailAddress(value){
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validEmail.test(value);
   }

   isValidName(value){
    const validName = /^[a-zA-Z\s]*$/;
    return validName.test(value);
   }

   isValidNumber(value){
    const validNumber = /^[0-9]*$/;
    return validNumber.test(value);
   }

   isValidURL(value){
    const validURL = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    return validURL.test(value);
   }

   isValidCVC(value){
    const validCVC = /^[0-9]{3,4}$/;
    return validCVC.test(value);
   }

   isValidUsZip(value){
    const validZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return validZip.test(value);
   }

   isValidPhone(value){
    const validPhone = /^[0-9]{5}(?:-[0-9]{4})?$/;
    return validPhone.test(value);
   }




   refreshPage() {
    window.location.reload();
}

}
