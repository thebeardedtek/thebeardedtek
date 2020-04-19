import { Observable } from 'rxjs';
import { Injectable , Inject, ViewChild, ElementRef} from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MenuNavigationService {
  // @ViewChild('container')
  // private container: ElementRef;

  baseURL = environment.restAPI.baseURL;
  menuAPI = environment.restAPI.apis.menu;

  constructor(@Inject(DOCUMENT) private document: any, public http: HttpClient) {
  }

  getMenuItemsRest() {
    return this.http.get(this.baseURL + this.menuAPI);
  }

}
