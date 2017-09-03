import { Component, OnInit } from '@angular/core';
import { Department } from '../models/departmentModel';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css'],
  providers: [DepartmentService]
})
export class DepartmentComponent implements OnInit {

  // private designations;
  departments: Array<Department>;
  addeddepartments: Array<Department>;
  updateddepartments: Array<Department>;
  deleteddepartments: Array<Department>;
  department:Array<any>;

private showEdit: boolean = false;

selected_details: any = [];

   init_details = {
     _id: "",
     department: ""
   };


  constructor(private _departmentService: DepartmentService) { }

  ngOnInit() {  

   this.getDepartments();

  }


  // console.log(this.designations);



  showAdd(){
      this.showEdit = false;
  }

  getDepartments(){
  this._departmentService.getDepartments()
      .subscribe((value) => {
        this.departments = value;
        console.log("getRoles");
        console.log(this.departments);
      });

  }

  AddDepartment(value: Department) {
    console.log(value);
    this._departmentService.addDepartment(value)
      .subscribe((resvalue) => {
        this.departments = resvalue;
        console.log("in Comp");
        console.log(this.departments);
         this.department = null; 
         this.getDepartments();         
      });   
     
  }

  updateDetails(value: Department){
    this.selected_details = value;
    console.log("updated details");
    console.log(this.selected_details); 
    this.showEdit = true;
  }

  updateDepartment(){
    console.log("selected");
    console.log(this.selected_details);
    this._departmentService.updateDepartment(this.selected_details)
      .subscribe((resValue) => {
          this.updateddepartments = resValue;
          console.log("Updated");
          console.log(this.updateddepartments);
            this.selected_details = this.init_details;
          this.getDepartments();
           this.showEdit = false;
      });
    
  }
  deleteDepartment(value){
      this._departmentService.deleteDepartment(value)
      .subscribe((resValue) => {
           this.deleteddepartments = resValue;
            console.log(this.deleteddepartments);
            this.getDepartments();
      });
  }


}
