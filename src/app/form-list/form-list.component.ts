import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from '../services/dynamicform.service';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.component.html',
  styleUrls: ['./form-list.component.css'],
  providers: [DynamicFormService]
})
export class FormListComponent implements OnInit {


  // datatable data
    first: number = 0;
    tablerows = [5,10,25,50,100];
    tableshow = 10;
  // datatable data

  dynamicforms: Array<any>;
  deletedform: any;
  constructor(private _dynamicFormService: DynamicFormService) { }

  ngOnInit() {
    this.getDynamicForm();
  }

  getDynamicForm(){
    this._dynamicFormService.getDynamicForm()
        .subscribe((value) => {
          this.dynamicforms = value;
          console.log("dynamicforms");
          console.log(this.dynamicforms);
        });  
    }

    deleteForm(form){
      this._dynamicFormService.deleteDynamicForm(form)
      .subscribe((value) => {
           this.deletedform = value;
            console.log(this.deletedform);
            this.getDynamicForm();
      });
  }

}
