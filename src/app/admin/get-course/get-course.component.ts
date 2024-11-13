import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../Service/course.service';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-course',
  standalone: true,
  imports: [CommonModule,FormsModule,DatePipe],
  templateUrl: './get-course.component.html',
  styleUrl: './get-course.component.css'
})
export class GetCourseComponent implements OnInit {
  courses: any[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      (data) => {
        this.courses = data;
        console.log('Courses loaded:', this.courses);
      },
      (error) => {
        console.error('Error fetching courses:', error);
      }
    );
  }
}