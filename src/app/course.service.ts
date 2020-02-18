import {Injectable} from '@angular/core';
import {OneCourseDataModel} from './Courses/one-course-data-model';
import {MockCourses} from './MockData/mock-courses';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses: OneCourseDataModel[] = MockCourses.courses;
  coursesChanged = new Subject<OneCourseDataModel[]>();
  coursesVoted: OneCourseDataModel[];

  constructor(
    public courseService: CourseService
  ) {
  }

  getCourses() {
    // this.courses.forEach(c => {
    //   if (!this.courseService.existCourse(c.id)) {
    //     this.deleteCourse(c.id);
    //   }
    // });
    return this.courses.slice();
  }

  changeNumberOfStudents(idd: string) {
    this.courses.map(course => {
      if (course.id === idd) {
        course.numberOfStudents++;
      }
    });
  }

  ratedCourse(idd: string) {
    this.coursesVoted.push(this.courseService.getCourse(idd));
  }

  rateCourse(idd: string, rate: number) {
    this.courses.map(course => {
      if (course.id === idd) {
        course.votesNumber++;
        course.votesSum += rate;
        course.rank = +((course.votesSum / course.votesNumber).toFixed(2));
      }
    });
  }
  canRateCourse(idd: string): boolean {
    let flag = true;
    this.coursesVoted.forEach(c => {
      if (c.id === idd) {
        flag = false;
      }
    });
    return flag;
  }

  getCourse(id: string) {
    return this.courses.filter(c => c.id === id)[0];
  }

  canJoin(idd: string): boolean {
    const courseToJoin = this.courses.find(c => c.id === idd);
    return !(courseToJoin.maxNumberOfStudents === courseToJoin.numberOfStudents);
  }

  deleteCourse(id: string) {
    const deletedCourse = this.courses.find(course => course.id === id);
    const index = this.courses.indexOf(deletedCourse);
    this.courses.splice(index, 1);
  }

  addCourse(courseName: string, numberOfECTS: number, image: string, numberOfSemester: number, typeOfCourse: string, maxNumberOfStudents: number) {
    const course: OneCourseDataModel = {
      id: (this.courses.length + 1).toString(),
      courseName,
      numberOfECTS,
      image,
      numberOfSemester,
      typeOfCourse,
      maxNumberOfStudents,
      rank: 0,
      numberOfStudents: 0,
      votesSum: 0,
      votesNumber: 0

    };
    this.courses.push(course);
  }

  existCourse(id: string): boolean {
    let exist = false;
    this.courses.forEach(c => {
      if (c.id === id) {
        exist = true;
      }
    });
    return exist;
  }
}
