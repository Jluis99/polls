import { AnswerI } from './../../../models/answer.interface';
import { QuestionI } from './../../../models/question.interface';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormValidation } from 'src/app/util/validate-form';

@Component({
   selector: 'app-form-questions',
   templateUrl: './form-questions.component.html',
   styleUrls: ['./form-questions.component.css'],
})
export class FormQuestionsComponent implements OnInit {
   @Input()
   currentQuestion: QuestionI;

   formQuestion: FormGroup;

   @Output()
   statusForm = new EventEmitter();

   submitted = false;
   obj = {
      showForm: false,
   };

   private addAnswers(): void {
      if (this.currentQuestion.answers.length === 0) {
         this.addAnswer();
      } else {
         this.currentQuestion.answers.forEach((e) => this.addAnswer(e));
      }
   }

   get questionFormControl(): any {
      return this.formQuestion.controls;
   }

   constructor() {}

   ngOnInit(): void {
      this.formQuestion = new FormGroup({
         description: new FormControl(this.currentQuestion.description, [
            Validators.required,
            Validators.maxLength(255),
         ]),
         answers: new FormArray([]),
         active: new FormControl(this.currentQuestion.active)
      });

      this.addAnswers();
   }

   get answers(): any {
      return this.formQuestion.get('answers') as FormArray;
   }

   addAnswer(answer?: AnswerI): void {
      const id = typeof answer === 'undefined' ? null : answer.id;
      const description =
         typeof answer === 'undefined' ? '' : answer.description;
      const isCorrect = typeof answer === 'undefined' ? false : answer.isCorrect;

      const obj: any = {
         description: new FormControl(description, [
            Validators.required,
            Validators.maxLength(255),
         ]),
         isCorrect: new FormControl(isCorrect)
      };
      if (id) {
         obj.id = new FormControl(id);
      }
      this.answers.push(
         new FormGroup(obj)
      );
   }

   removeAnswer(index: number): void {
      this.answers.removeAt(index);
   }

   validateForm(type: string, name: string, options?: any): string {
      return FormValidation.validForm(type, name, options);
   }

   saveQuestion(): void {
      this.submitted = true;
      this.currentQuestion.description = this.formQuestion.value.description;
      this.currentQuestion.answers = this.formQuestion.value.answers;
      const obj = { ...this.obj, currentQuestion: this.currentQuestion };
      this.emitFather(obj);
   }

   cancelForm(): void {
      this.emitFather(this.obj);
   }

   emitFather(obj): void {
      this.statusForm.emit(obj);
   }

   clickRadio(index): void {

      this.answers.controls.forEach((e, i) => {
         e.value.isCorrect = i === index ? 0 : 1;
      });
   }
}
