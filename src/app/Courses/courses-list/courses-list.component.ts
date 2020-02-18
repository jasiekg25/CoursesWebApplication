import { Component, OnInit } from '@angular/core';
import {OneCourseDataModel} from '../one-course-data-model';
import {CourseService} from '../../course.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: OneCourseDataModel[];

  constructor(private courseService: CourseService) {

  }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

}
