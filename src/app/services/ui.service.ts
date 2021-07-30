import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private shouldAddTasks: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddTask(): void {
    this.shouldAddTasks = !this.shouldAddTasks;
    this.subject.next(this.shouldAddTasks);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
