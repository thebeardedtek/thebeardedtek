import { Component, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { Title, Meta } from '@angular/platform-browser';
import { CoursesService } from './../../../services/courses/courses.service'; 

@Component({
  selector: 'app-ecourses',
  templateUrl: './ecourses.component.html',
  styleUrls: ['./ecourses.component.css']
})
export class EcoursesComponent implements OnInit {
  public base: any;
  public apis: any;
  public allCourses: any;

  constructor(private titleService: Title, private meta: Meta, private courses:CoursesService) { }

  getAllCourses(){
    this.allCourses = [];
    this.courses.getAllCourses().subscribe((response:any)=>{
      if(response){
        this.allCourses = response.data;
      } else {
        throw new Error('Not able to retrieve data.');
      }
    });
  }

  ngOnInit() {
    window.scroll(0, 0);
    this.titleService.setTitle(`eCourse Signup & Management | Atlanta Mobile Web Design`);
    this.meta.updateTag({ name: 'description', content: `Manage your learning process by signing up for ecourses, testing, and certification`});
    this.base = environment.restAPI.baseURL;
    this.apis = environment.restAPI.apis;
    this.allCourses = [];
    this.getAllCourses();
  }

}
