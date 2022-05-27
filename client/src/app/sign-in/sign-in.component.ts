import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
@Injectable()
export class SignInComponent implements OnInit {

  signInForm = this.formBuilder.group({
    email: '',
    pass: ''
  });

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(user: any){
    localStorage.setItem('user', JSON.stringify(user));
    this.router.navigate(['/TeamTask'])
  }

  onSubmit(): void {
    // Process checkout data here
    if(this.signInForm.value.email != '' && this.signInForm.value.pass != ''){
      this.http.get(`http://localhost:3002/user/getWithEmail/${this.signInForm.value.email}`).subscribe(result => {
        const user : any = result;
        if(user.pass == this.signInForm.value.pass)
        {
          this.loginUser(user);
        }
        else
        {
          console.log(user);
          alert("Wrong email or password");
        }
      });
    }
  }

}