import { Component, OnInit, Input } from '@angular/core';

import { CourseService } from './../../home/service.service';
import { Course } from './../../home/course.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() course: Course;

  constructor(private courseService: CourseService) {}

  ngOnInit() {}
}
