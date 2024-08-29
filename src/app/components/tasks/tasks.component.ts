import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from '../../Task';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.fetchTasks();
  }

  fetchTasks(): void {
    this.taskService.getTasks()
      .pipe(
        catchError(error => {
          console.error('Error fetching tasks', error);
          return of([]);
        })
      )
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter(t => t.id !== task.id);
    },
    error => {
      console.error('Error deleting task', error);
    });
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe(
      updatedTask => {
        this.tasks = this.tasks.map(t => t.id === updatedTask.id ? updatedTask : t);
      },
      error => {
        console.error('Error updating task reminder', error);
      }
    );
  }

  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(
      newTask => {
        this.tasks.push(newTask);
      },
      error => {
        console.error('Error adding task', error);
      }
    );
  }
}
