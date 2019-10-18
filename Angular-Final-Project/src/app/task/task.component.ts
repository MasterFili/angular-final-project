import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [
    {
      id: 0,
      title: 'Washing Dishes',
      time: '12/12/12',
      description: 'wash the dishes after dinner.'
    },
    {
      id: 1,
      title: 'Reading A Book',
      time: '12/13/12',
      description: 'finish the book harry potter.'
    },
    {
      id: 2,
      title: 'Going to the store',
      time: '12/13/12',
      description: 'pick up some eggs and milk.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
