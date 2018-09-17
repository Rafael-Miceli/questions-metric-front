import { Component, Input } from '@angular/core';
import { Exam } from '../models/exam';

@Component({
  templateUrl: './exam.component.html'
})
export class ExamComponent {

  @Input()exam: Exam;
}
