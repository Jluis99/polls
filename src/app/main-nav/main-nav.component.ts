import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent {
  constructor(private authService: AuthService, private route: Router) {}

  logOut() {
    this.authService.removeToken();
    this.route.navigateByUrl('/login');
  }
}
