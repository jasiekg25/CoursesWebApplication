import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CourseService} from '../../../course.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  newCourseForm: FormGroup;

  constructor(private courseService: CourseService, private route: Router) {
  }

  private form() {
    let image: string;
    let courseName: string;
    let numberOfECTS: number;
    let numberOfSemester: number;
    let typeOfCourse: string; // it will be chosen, not writen
    let maxNumberOfStudents: number;

    this.newCourseForm = new FormGroup({
      image: new FormControl(image, Validators.required),
      courseName: new FormControl(courseName, Validators.required),
      numberOfECTS: new FormControl(numberOfECTS, Validators.required),
      numberOfSemester: new FormControl(numberOfSemester, Validators.required),
      typeOfCourse: new FormControl(typeOfCourse, Validators.required),
      maxNumberOfStudents: new FormControl(maxNumberOfStudents, Validators.required),
    });
  }

  ngOnInit() {
    this.form();
  }

  onSubmit() {
    const name: string = this.newCourseForm.value.courseName;
    const ects: number = this.newCourseForm.value.numberOfECTS;
    const image: string = this.newCourseForm.value.image;
    const semester: number = this.newCourseForm.value.numberOfSemester;
    const formOfCourse: string = this.newCourseForm.value.typeOfCourse;
    const maxStudents: number = this.newCourseForm.value.maxNumberOfStudents;
    this.courseService.addCourse(name, ects, image, semester, formOfCourse, maxStudents);
    this.route.navigate(['/courses']);
  }

}
