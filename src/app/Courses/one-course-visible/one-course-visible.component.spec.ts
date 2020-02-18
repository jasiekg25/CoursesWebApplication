import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCourseVisibleComponent } from './one-course-visible.component';

describe('OneCourseVisibleComponent', () => {
  let component: OneCourseVisibleComponent;
  let fixture: ComponentFixture<OneCourseVisibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneCourseVisibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneCourseVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
