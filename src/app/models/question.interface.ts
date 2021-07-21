import { AnswerI } from './answer.interface';

export interface QuestionI {
  id?: number;
  description: string;
  active: number;
  answers: AnswerI[];
}
