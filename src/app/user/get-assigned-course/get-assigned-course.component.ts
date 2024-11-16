import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service'; // Ensure correct path
import { AuthService } from '../../service/auth.service'; // Ensure correct path
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-assigned-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-assigned-course.component.html',
  styleUrls: ['./get-assigned-course.component.css'] // Fixed `styleUrl` typo
})
export class GetAssignedCourseComponent implements OnInit {
  assignedCourses: any[] = []; // Stores assigned courses
  loading: boolean = true; // Indicates loading state
  errorMessage: string = ''; // Holds error messages

  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    // Get the current user
    const currentUser = this.authService.getCurrentUser();

    if (currentUser && currentUser.id) {
      // Fetch assigned courses for the current user
      this.userService.getAssignedCourses(currentUser.id).subscribe(
        (data: any) => {
          this.assignedCourses = data?.data || []; // Handle potential null/undefined
          this.loading = false; // Loading completed
        },
        (error: any) => {
          console.error('Error fetching assigned courses:', error); // Log detailed error
          this.errorMessage = 'Failed to load assigned courses.';
          this.loading = false;
        }
      );
    } else {
      this.errorMessage = 'User not logged in.';
      this.loading = false;
    }
  }
}
