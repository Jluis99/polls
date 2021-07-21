import { EStatus } from 'src/app/enums/EStatus';
import { QuestionI } from './../../../models/question.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
   selector: 'app-list-question',
   templateUrl: './list-question.component.html',
   styleUrls: ['./list-question.component.css'],
})
export class ListQuestionComponent implements OnInit {
   @Input()
   poll;

   constructor() {}

   actualQuestion: QuestionI;
   showForm = false;
   isEdited = false;

   ngOnInit(): void {
   }

   addQuestion(): void {
      this.actualQuestion = {
         description: '',
         answers: [],
         active: 0,
      };
      this.isEdited = false;
      this.changeFormStatus(true);
   }

   editQuestion(question): void {
      this.actualQuestion = question;
      this.isEdited = true;
      this.changeFormStatus(true);
   }

   changeFormStatus(status: boolean): void {
      this.showForm = status;
   }

   resolveUserForm(event): any {
      this.changeFormStatus(event.showForm);
      if (event.currentQuestion) {
         if (!this.isEdited) {
            this.poll.questions.push(event.currentQuestion);
         }
      }
   }

   resolveQuestionStatus(id: number): string {
      return EStatus.result(id).value;
   }

   changeStatusQuestion(question: QuestionI, status: number): void {
      question.active = status;
   }
}
