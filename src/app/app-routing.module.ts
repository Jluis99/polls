import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPollsComponent } from './components/polls/list-polls/list-polls.component';

const routes: Routes = [
  { path: '', redirectTo: '/polls', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'polls', component: ListPollsComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
