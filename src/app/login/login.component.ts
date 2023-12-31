

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm!: FormGroup;
 
  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}
 
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
 
  Login(): void {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;
 
      const url = `http://localhost:5199/api/Registrations/${email}/${password}`;
 
      this.http.get<any>(url).subscribe(
        (data) => {
          console.log(data);
          if (!data) {
            console.error('Data is undefined:', data);
            alert('An unexpected error occurred. Please try again later.');
            return;
          }
 
          if (data.Status === 'Error') {
            alert(data.Message);
          } else {
           // const lowerCaseEmail = email.toLowerCase();
           localStorage.setItem('User',JSON.stringify(data));
            window.location.href = '/viewbooks';
            
          }
        },
        (error: HttpErrorResponse) => {
          console.error('HTTP Error:', error);
          if (error.status === 404) {
            alert('Invalid email or password.');
          } else {
            alert('An unexpected error occurred. Please try again later.');
          }
        }
      );
    }
  }
}