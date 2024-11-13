import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../Service/course.service';
import { AssignmentService } from '../../Service/assignment.service';

@Component({
  selector: 'app-assign-course',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './assign-course.component.html',
  styleUrls: ['./assign-course.component.css'] // fix typo styleUrls
})
export class AssignCourseComponent implements OnInit {
  courses = [];
  employees = [];
  selectedCourseId: number | undefined;
  selectedEmployeeId: string | undefined;

  constructor(private assignmentService: AssignmentService) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadEmployees();
  }

  loadCourses(): void {
    this.assignmentService.getCourses().subscribe({
      next: (data) => {
        this.courses = data; // Store the courses in the component
      },
      error: (error) => {
        console.error('Error loading courses:', error);
      }
    });
  }

  loadEmployees(): void {
    this.assignmentService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data; // Store the employees in the component
      },
      error: (error) => {
        console.error('Error loading employees:', error);
      }
    });
  }

  assignCourse(): void {
    if (this.selectedCourseId && this.selectedEmployeeId) {
      this.assignmentService.assignCourse(this.selectedEmployeeId, this.selectedCourseId).subscribe({
        next: (response) => {
          console.log('Course assigned successfully:', response);
          // Add your success logic here
        },
        error: (error) => {
          console.error('Error assigning course:', error);
          // Add your error handling logic here
        }
      });
    } else {
      alert('Please select both a course and an employee.');
    }
  }
}
