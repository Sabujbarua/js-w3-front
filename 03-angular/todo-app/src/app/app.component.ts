import { Component } from '@angular/core';
import { Task } from './shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // notre tableau de tasks
  tasks: Task[] = [{
    id: 1,
    name: 'faire la vaisselle',
    status: false
  },
    {
      id: 2,
      name: 'sortir les poubelles',
      status: false
    },
    {
      id: 3,
      name: 'sortir ma fiancée',
      status: true
    },
    {
      id: 4,
      name: 'corriger les évaluations de poles',
      status: false
    },

  ];

    /**
     * L'utilisateur viens de
     * termin une tâche.
     * @param {Task} task
     */
  taskIsDone(task: Task) {
      task.status = true;
  }


  newTask(taskFromEvent: Task) {
    this.tasks.push(taskFromEvent);
  }

  /**
   * L'utilisateur viens de supprimer
   * une tâche. on la retire de tableau
   * @param task*/
  removeTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);

  }
}
