import { Injectable } from '@angular/core';

interface Tasks {
  tarefa: string;
}

@Injectable()
export class MatheusTasksService {
  constructor() {}
  tarefas: Array<Tasks> = [];

  getTarefas() {
    return this.tarefas;
  }
  setTarefa(tarefa: string) {
    this.tarefas.push({ tarefa });
  }
  deleteTarefa(index) {
    this.tarefas.splice(index, 1);
  }
  getTotalTarefas() {
    return this.tarefas.length;
  }
}
