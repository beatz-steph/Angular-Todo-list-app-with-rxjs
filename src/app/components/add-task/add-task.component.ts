import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../../Task';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  @Output() onSubmitTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) return alert('Please enter a text');

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onSubmitTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
