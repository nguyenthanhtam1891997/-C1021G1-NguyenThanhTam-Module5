import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../../todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly API_URL = 'http://localhost:3000/todoList';

  constructor(private httpClient: HttpClient) {
  }

  findAll() {
    return this.httpClient.get<Todo[]>(this.API_URL);
  }

  findById(id: number){
    return this.httpClient.get<Todo>(this.API_URL + '/' + id);
  }

  create(todo: Todo){
    return this.httpClient.post<Todo>(this.API_URL, todo);
  }

  update(todo: Todo){
    return this.httpClient.patch<Todo>(this.API_URL + '/' + todo.id, todo);
  }

  delete(id: number){
    return this.httpClient.delete<Todo>(this.API_URL + '/' + id);
  }
}
