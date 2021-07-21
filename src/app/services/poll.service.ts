import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {

   url = 'http://[::1]:3000';

  constructor(private readonly http: HttpClient) {}

   getPolls(): Observable<any> {
      const url = this.url + '/poll';
      return this.http.get<any>(url);
   }

   changeStatusPoll(pollId, status): Observable<any> {
      const url = this.url + '/poll/' + pollId;
      return this.http.patch<any>(url, status);
   }

   savePoll(poll): Observable<any> {
      const url = this.url + '/poll/';
      return this.http.post<any>(url, poll);
   }


}
