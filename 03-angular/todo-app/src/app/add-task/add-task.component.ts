import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../shared/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task: Task = new Task();
  @Output() newTaskEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addTask() {
    // console.log(this.task);

    /**
     * Prévenir à l'application qu'une
     * , nouvelle tâche à été créée
     */
    this.newTaskEvent.emit(this.task);
    this.task = new Task();
  }
}
