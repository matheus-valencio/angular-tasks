import { Component, OnInit } from '@angular/core';
import { MatheusTasksService } from '../matheus-tasks.service';

@Component({
  selector: 'app-matheus-home',
  templateUrl: './matheus-home.component.html',
  styleUrls: ['./matheus-home.component.css'],
})
export class MatheusHomeComponent implements OnInit {
  constructor(public tarefas: MatheusTasksService) {}

  ngOnInit() {}
}
