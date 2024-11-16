import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { UserService } from '../service/user.service';

import { CommonModule } from '@angular/common';

export interface ApiResponse {

 isSuccess: boolean;

 message: string;

}

@Component({

 selector: 'app-updatecourse',

 standalone: true,

 imports: [FormsModule,CommonModule,ReactiveFormsModule],

 templateUrl: './update-course.component.html',

 styleUrl: './update-course.component.css'

})

export class UpdatecourseComponent implements OnInit {

 updateCourseForm: FormGroup;

 isLoading = false;

 successMessage: string = '';

 errorMessage: string = '';

 constructor(private userservice: UserService) {

  this.updateCourseForm = new FormGroup({

   employeeId: new FormControl('', Validators.required),

   courseId: new FormControl(0, Validators.required),

   modulesCompleted: new FormControl(0, [Validators.required, Validators.min(0)])

  });

 }

 ngOnInit(): void {}

 onSubmit(): void {

  if (this.updateCourseForm.invalid) {

   return;

  }

  const { employeeId, courseId, modulesCompleted } = this.updateCourseForm.value;

  this.isLoading = true;

  this.userservice.updateCourseProgress(employeeId, courseId, modulesCompleted)

   .subscribe(

    (response: ApiResponse) => {

     this.isLoading = false;

     if (response.isSuccess) {

      this.successMessage = response.message;

      this.updateCourseForm.reset();

     } else {

      this.errorMessage = response.message;

     }

    },

    (error) => {

     this.isLoading = false;

     this.errorMessage = 'An error occurred while updating progress.';

    }

   );

 }

}





