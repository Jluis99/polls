import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class QuestionService {
   url = 'http://[::1]:3000';

   constructor(private readonly http: HttpClient) {}

   changeStatusQuestion(questionId: number, status: number): Observable<any> {
      const url = this.url + '/question/' + questionId;
      return this.http.patch<any>(url, status);
   }
}
