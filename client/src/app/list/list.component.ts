import { Observable } from 'rxjs';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { CourseService } from './../home/service.service';
import { Course } from './../home/course.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() searchTerm: string;
  courses: Observable<Course[]>;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courses = this.courseService.getAllCourses(this.searchTerm);
  }

  ngOnChanges() {
    this.courses = this.courseService.getAllCourses(this.searchTerm);
  }
}
