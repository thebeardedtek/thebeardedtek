import { Component, OnInit } from '@angular/core';
import { CoursesService } from './../../../../services/courses/courses.service';
import * as moment from 'moment';

@Component({
  selector: 'app-courses-sidebar',
  templateUrl: './courses-sidebar.component.html',
  styleUrls: ['./courses-sidebar.component.css']
})
export class CoursesSidebarComponent implements OnInit {

  public allCourses: any[];
  constructor(public courses: CoursesService) { }

  getAllCourses(){
    this.allCourses = [];
    this.courses.getAllCourses().subscribe((response:any)=>{
      if(response){
        this.allCourses = response.data;
        this.allCourses.sort((a,b)=>{
          return b.courseId - a.courseId;
        });
      }
    });
  }

  ngOnInit() {
    this.allCourses = [];
    this.getAllCourses();
  }

}
