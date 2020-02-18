import {Component, Input, OnInit} from '@angular/core';
import {DeleteCourseComponent} from '../course-edition/delete-course/delete-course.component';

@Component({
  selector: 'app-one-course-visible',
  templateUrl: './one-course-visible.component.html',
  styleUrls: ['./one-course-visible.component.css']
})
export class OneCourseVisibleComponent implements OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() image: string;
  @Input() delete: DeleteCourseComponent;
  constructor() { }

  ngOnInit() {
  }

}
