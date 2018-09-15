import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    // If Already Loged In
    if (this.userService.loggedInUser) {
      this.router.navigate(['/dashboard']);
    }
  }

  login(loginForm: NgForm): void {
    console.log(`Logando`, loginForm);
    this.userService.LogIn({username: loginForm.form.value.username, password: loginForm.form.value.password})
      .subscribe(result => {
        console.log(`result `, result);
        localStorage.setItem('loggedInUser', JSON.stringify(result));
        this.userService.loggedInUser = result;
        this.router.navigate(['/dashboard']);
    },
    err => {
      console.log(`Error `, err);
    });
  }
}
