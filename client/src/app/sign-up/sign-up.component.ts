import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

@Injectable()
export class SignUpComponent implements OnInit {

  signUpForm = this.formBuilder.group({
    email: '',
    pass: ''
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Process checkout data here
    if(this.signUpForm.value.email != '' && this.signUpForm.value.pass != ''){
      this.http.post("http://localhost:3002/user/create", this.signUpForm.value).subscribe(result => {'Account created'});
      this.signUpForm.reset();
      this.router.navigate(['/SignIn'])
    }
  }


}
