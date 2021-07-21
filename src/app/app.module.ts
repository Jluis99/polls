import { FormPollComponent } from './components/polls/form-poll/form-poll.component';
import { ListPollsComponent } from './components/polls/list-polls/list-polls.component';
import { AuthService } from './services/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { HomeComponent } from './components/home/home.component';
import { FormQuestionsComponent } from './components/questions/form-questions/form-questions.component';
import { ListQuestionComponent } from './components/questions/list-question/list-question.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ListPollsComponent,
    FormPollComponent,
    FormQuestionsComponent,
    ListQuestionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
         tokenGetter: AuthService.getToken,
         allowedDomains: ['localhost:3000', 'jsonplaceholder.typicode.com', '[::1]:3000'],
      },
   }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
