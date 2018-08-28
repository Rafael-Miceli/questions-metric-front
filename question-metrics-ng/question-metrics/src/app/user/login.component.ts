import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    // If Already Loged In
    if (true) {
      this.router.navigate(['/dashboard']);
    }
  }

}
