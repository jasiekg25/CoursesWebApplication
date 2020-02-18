import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesListComponent } from './Courses/courses-list/courses-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CourseService} from './course.service';
import { OneCourseVisibleComponent } from './Courses/one-course-visible/one-course-visible.component';
import { CourseDetailsComponent } from './Courses/course-details-page/course-details.component';
import { AddCourseComponent } from './Courses/course-edition/add-course/add-course.component';
import { DeleteCourseComponent } from './Courses/course-edition/delete-course/delete-course.component';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    OneCourseVisibleComponent,
    CourseDetailsComponent,
    AddCourseComponent,
    DeleteCourseComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
