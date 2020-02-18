import {Component, Input, OnInit} from '@angular/core';
import {CourseService} from '../../course.service';
import {OneCourseDataModel} from '../one-course-data-model';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {map, switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {

  @Input() id: string;
  @Input() image: string;
  @Input() name: string;
  @Input() description: string;
  @Input() ects: number;
  @Input() formOfCourse: string;
  @Input() rank: number;
  @Input() semester: number;
  votesSum: number;
  votesNumber: number;
  vote: boolean;
  course: OneCourseDataModel;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: CourseService
  ) {
  }

  ngOnInit() {
    this.route.params.pipe(map(params => params['id'])).subscribe(id => {
      this.course = this.courseService.getCourse(id);
    });
  }

  rateCourse(id: number) {
    if (this.courseService.canRateCourse(this.id)) {
      this.vote = true;
      this.courseService.ratedCourse(this.id);
      this.courseService.rateCourse(this.id, id);
      this.votesSum = this.course.votesSum;
      this.votesNumber = this.course.votesNumber;
      this.rank = this.course.rank;
    } else {
      window.alert('Możesz ocenić kurs tylko raz');
    }
  }

  joinCourse() {
    if (!this.courseService.canJoin(this.course.id)) {
      window.alert('Niestety nie ma już miejsc na ten kurs');
    } else {
      // this.userService.joinCourse(this.course.idd);
    }
  }

}
