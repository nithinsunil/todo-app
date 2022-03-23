import { Injectable } from '@angular/core';
import { Todo } from './todo.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: Todo[]=[
    new Todo('This is a test todo', false),
    new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos veniam accusamus ullam tempora omnis sit natus repellat, reiciendis culpa amet minus ipsam assumenda sint maiores consectetur cupiditate incidunt esse! Rerum.',true)
  ];

  constructor() { }

  getAllTodos() {
    return this.todos
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }

  updateTodo(index: number, updatedTodo: Todo){
    this.todos[index] = updatedTodo
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1)
  }

}
