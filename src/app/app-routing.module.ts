import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseDetailsComponent} from './Courses/course-details-page/course-details.component';
import {CoursesListComponent} from './Courses/courses-list/courses-list.component';
import {DeleteCourseComponent} from './Courses/course-edition/delete-course/delete-course.component';
import {AddCourseComponent} from './Courses/course-edition/add-course/add-course.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full',

  },
  {
    path: 'courses',
    component: CoursesListComponent
  },
  {
    path: 'courses/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'deleteCourse',
    component: DeleteCourseComponent
  },
  {
    path: 'addCourse',
    component: AddCourseComponent
  },
  {
    path: 'deleteCourse',
    component: DeleteCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
