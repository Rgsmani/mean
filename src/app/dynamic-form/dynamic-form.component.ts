import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'] ,
  // tslint:disable-next-line:whitespace
  // tslint:disable-next-line:use-input-property-decorator
  inputs:['formValues']
})
export class DynamicFormComponent implements OnInit {
  dyanmicvalues:any = [];
  textinputValues: any = {
    check:[],
  };
  textareaValues: any = {};
  checkboxvalues: any = {};
  datefields = [];
  checkboxfields: any = [];
  form: any = [];

  daterandom = 10;
  constructor() { }

  ngOnInit() {
    // console.log(formValues);
  }

  // tslint:disable-next-line:one-line
  addDynamicForm(value) {
    console.log('value');
    console.log(value);
    console.log('this.datefields');
   console.log(this.datefields[0].date[1]);

  }
  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
