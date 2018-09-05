import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private username: string;
  private password: string;

  constructor(private router: Router) {}

  ngOnInit() {
    // If Already Loged In
    if (true) {
      this.router.navigate(['/dashboard']);
    }
  }

  login(loginForm: NgForm): void {
    console.log(`Logando`, loginForm);
  }
}
