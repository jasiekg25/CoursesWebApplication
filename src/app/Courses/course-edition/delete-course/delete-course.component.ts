import {Component, Input, OnInit} from '@angular/core';
import {OneCourseDataModel} from '../../one-course-data-model';
import {CourseService} from '../../../course.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})

export class DeleteCourseComponent implements OnInit {

  @Input() id: string;
  courses: OneCourseDataModel[];
  subscription: Subscription;
  constructor(private courseService: CourseService) { }

  ngOnInit() {
    this.courses = this.courseService.getCourses();
  }

  remove(id: string) {
    this.courseService.deleteCourse(id);
  }


}
