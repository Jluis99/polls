import { PollService } from './../../../services/poll.service';
import { PollI } from './../../../models/poll.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValidation } from 'src/app/util/validate-form';

@Component({
   selector: 'app-form-poll',
   templateUrl: './form-poll.component.html',
   styleUrls: ['./form-poll.component.css'],
})
export class FormPollComponent implements OnInit {
   @Input()
   poll: PollI;

   @Output()
   resolveForm = new EventEmitter();

   pollForm: FormGroup;

   submitted = false;

   obj = {
      showForm: false,
   };

   constructor(private readonly pollService: PollService) {}

   ngOnInit(): void {
      this.pollForm = new FormGroup({
         id: new FormControl(this.poll.id),
         name: new FormControl(this.poll.name, [
            Validators.required,
            Validators.maxLength(255),
         ]),
         status: new FormControl(this.poll.status, [Validators.required]),
      });
   }

   get pollFormControl(): any {
      return this.pollForm.controls;
   }

   validateForm(type: string, name: string, options?: any): string {
      return FormValidation.validForm(type, name, options);
   }

   get isInvalidForm(): boolean {
      return !this.pollForm.valid || this.poll.questions.length === 0;
   }

   async onSubmit(): Promise<any> {
      this.submitted = true;
      this.poll.name = this.pollForm.value.name;
      this.poll.status = this.pollForm.value.status;
      await this.pollService.savePoll(this.poll).subscribe({
         next: (data) => {
            console.log(data);
         },
         error: (e) => {
            console.log(e);
         },
      });
   }

   emitFather(obj): void {
      this.resolveForm.emit(obj);
   }

   cancelForm(): void {
      this.emitFather(this.obj);
   }

   changeStatusPoll(status: number): void {
      this.pollForm.value.status = status;
   }
}
