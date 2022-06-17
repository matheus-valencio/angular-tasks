import { Component, OnInit } from '@angular/core';
import { MatheusTasksService } from '../matheus-tasks.service';

@Component({
  selector: 'app-matheus-tasks',
  templateUrl: './matheus-tasks.component.html',
  styleUrls: ['./matheus-tasks.component.css'],
})
export class MatheusTasksComponent implements OnInit {
  constructor(public tarefas: MatheusTasksService) {}

  ngOnInit() {}
}
