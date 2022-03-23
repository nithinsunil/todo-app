import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!: Todo[]

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.todos = this.ds.getAllTodos()
  }

  onFormSubmit(form: NgForm){
    if(form.invalid) return alert("Form is invalid")

    console.log("Submit clicked");
    console.log(form);
    
    
    this.ds.addTodo(new Todo(form.value.text))
    
  }
}
