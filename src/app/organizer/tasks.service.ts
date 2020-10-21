import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Task {
  id?: string;
  title: string;
  date: string;
}

export interface CreateResponse {
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  static url = 'https://angular-calendar-84647.firebaseio.com/tasks';

  constructor(private http: HttpClient) {}

  create(task: Task): Observable<Task> {
    return this.http
      .post<CreateResponse>(`${TasksService.url}/${task.date}.json`, task)
      .pipe(
        map((response) => {
          console.log(response);
          return { ...task, id: response.name };
        })
      );
  }
}
