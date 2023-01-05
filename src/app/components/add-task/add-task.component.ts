import { UiService } from './../../service/ui.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = "";
  day: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription?: Subscription;

  constructor(
    private UiService:UiService
  ){
    this.subscription = this.UiService.onToggle().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {

  }

  onSubmit(){
    if(this.text.length == 0 ){
      alert("Please add a task!");
    }

    const {text,day,reminder} = this
    const newTask = {text,day,reminder}

    this.onAddTask.emit(newTask);


  }


}
