import { QuestionI } from './question.interface';

export interface PollI {
  id?: number;
  name: string;
  status: number;
  questions: QuestionI[];
}

