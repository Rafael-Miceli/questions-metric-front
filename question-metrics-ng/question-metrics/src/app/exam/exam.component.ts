import { Component, Input } from '@angular/core';
import { Exam } from '../models/exam';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html'
})
export class ExamComponent {

  @Input()exam: Exam;
}
