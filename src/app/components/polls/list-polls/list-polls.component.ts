import { PollI } from './../../../models/poll.interface';
import { PollService } from './../../../services/poll.service';
import { Component, OnInit } from '@angular/core';
import { EStatus } from 'src/app/enums/EStatus';

@Component({
   selector: 'app-list-polls',
   templateUrl: './list-polls.component.html',
   styleUrls: ['./list-polls.component.css'],
})
export class ListPollsComponent implements OnInit {
   showForm = false;

   polls: PollI[];

   poll: PollI;

   constructor(private readonly pollService: PollService) {}

   ngOnInit(): void {
      this.getPolls();
   }

   getPolls(): any {
      this.pollService.getPolls().subscribe({
         next: (data) => {
            this.polls = data.polls;
         },
         error: (e) => {
            console.log(e);
         },
      });
   }

   resolvePollStatus(id: number): string {
      return EStatus.result(id).value;
   }

   changeStatusForm(status): void {
      this.showForm = status;
      if (!status) {
         this.getPolls();
      }
   }

   addNewPoll(): void {
      this.poll = {
         name: '',
         status: 0,
         questions: [],
      };
      this.changeStatusForm(true);
   }

   editPoll(poll): void {
      this.poll = poll;
      this.changeStatusForm(true);
   }

   resolveForm(obj): any {
      this.changeStatusForm(obj.showForm);
   }

   async changeStatusPoll(poll: PollI, status: number): Promise<any> {
      await this.pollService.changeStatusPoll(poll.id, { status }).subscribe({
         next: (data) => {
            poll.status = data.poll.status;
         },
         error: (e) => {
            console.log(e);
         }
      });
   }
}
