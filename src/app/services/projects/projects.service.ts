import { Observable } from 'rxjs';
import { Injectable , Inject, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  baseURL = environment.restAPI.baseURL;
  projectsAPI = environment.restAPI.apis.projects;

  constructor(public http: HttpClient) {
  }

  getClientProjects(clientemail) {
    return this.http.get(`${this.baseURL}${this.projectsAPI}?clientemail=${clientemail}`);
  }

}



