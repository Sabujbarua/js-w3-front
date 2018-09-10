import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../models/task';
import {ifTrue} from 'codelyzer/util/function';

@Pipe({
  name: 'taskFilter',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: boolean): Task[] {

    const filteredTasks: Task[] = [];
    /**
     * je retourne un tableau de tâches filtré
     * par rapport au "status"*/
    for (let i = 0; i < tasks.length; i++) {
      //vérification dans console
      // console.log(tasks);

      /**
       * je vérifie si le "status" de l'une de mes tâches (tasks[i])
       * correspond au "status" que je recherche
       */
      if (tasks[i].status === status) {
        filteredTasks.push(tasks[i]);
      }
    }
    return filteredTasks;
  }

}
