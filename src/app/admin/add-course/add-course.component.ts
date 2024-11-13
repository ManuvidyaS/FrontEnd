import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//add the dto connection to the fronted component

export interface ResponseDTO {
  IsSuccess: boolean;
  message: string;
}
@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  userObj:any={
    CourseId:0,
    Title:'',
    Description:'',
    EndDate:''
  };
  router = inject(Router);
  http = inject(HttpClient);
  resultObj: ResponseDTO | undefined;

  onSubmit() {
    this.http.post<ResponseDTO>("https://localhost:7723/api/Course", this.userObj)
      .subscribe({
        next: (res: ResponseDTO) => {
          this.resultObj = res;
          console.log(this.resultObj);

          if (this.resultObj.IsSuccess) {
            alert("New Course Added Successfully");
            localStorage.setItem('Course', this.userObj.title);
          } else {
            alert(this.resultObj.message || 'Something went wrong');
          }
        }
});
}
}
