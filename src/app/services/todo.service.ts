import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl: string = 'http://localhost:8000/api/todos';

  constructor(private http: HttpClient) { }

  createTodo(title: string): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, { title: title });
  }

  getTodos() {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateTodo(id: number, data: {title: string}) {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, data)
  }
}
