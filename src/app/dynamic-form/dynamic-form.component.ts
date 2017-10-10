import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'] ,
  inputs:['formValues']
})
export class DynamicFormComponent implements OnInit {

  textinputValues: any = {};
  textareaValues: any = {};

  constructor() { }

  ngOnInit() {
  }

  addDynamicForm(value){
    console.log("Dyanamic form");
    console.log(value);
    console.log("textareaValues");
    console.log(this.textareaValues);
  }
}
