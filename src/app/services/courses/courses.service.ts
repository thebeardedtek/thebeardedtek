import { Observable } from 'rxjs';
import { Injectable , Inject, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  baseURL = environment.restAPI.baseURL;
  coursesAPI = environment.restAPI.apis.courses;

  constructor(public http: HttpClient) {
  }

  getAllCourses() {
    return this.http.get(`${this.baseURL}${this.coursesAPI}`);
  }

  removeCourse(currentUser){
    return this.http.put(`${this.baseURL}${this.coursesAPI}`, currentUser);
  }

}



