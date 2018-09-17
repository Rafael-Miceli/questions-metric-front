import { Component, Input } from '@angular/core';
import { Exam } from '../models/exam';

@Component({
  selector: 'app-exam-list',
  templateUrl: './examlist.component.html'
})
export class ExamListComponent {

  @Input() exams: Exam[];
  @Input() topExams: number;
}
