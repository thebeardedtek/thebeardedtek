import { Observable } from 'rxjs';
import { Injectable , Inject, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PricingService {

  baseURL = environment.restAPI.baseURL;
  pricingAPI = environment.restAPI.apis.pricing;

  constructor(public http: HttpClient) {
  }

  getAllPricingPlans() {
    return this.http.get(this.baseURL + this.pricingAPI);
  }

}



