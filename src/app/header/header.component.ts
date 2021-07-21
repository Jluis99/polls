import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(readonly authService: AuthService, readonly route: Router) {}

  ngOnInit(): void {}

  logOut() {
    this.authService.removeToken();
    this.route.navigateByUrl('/login');
  }
}
