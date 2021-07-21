import { AuthService } from './services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
   title = 'polls';

   constructor(readonly authService: AuthService, readonly route: Router) {}

   ngOnInit(): void {
      let isLogin: boolean;
      isLogin = this.isLogged();
      if (!isLogin) {
         this.route.navigateByUrl('/polls');
      }
   }

   isLogged(): boolean {
      return this.authService.validateToken();
   }
}
