import { Component, OnInit } from '@angular/core';
import { Designation } from '../models/designationModel';
import { DesignationService } from '../services/designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css'],
  providers: [DesignationService]
})
export class DesignationComponent implements OnInit {

  // private designations;
  designations: Array<Designation>;
  addeddesignations: Array<Designation>;
  updateddesignations: Array<Designation>;
  deletedddesignation: Array<Designation>;
  designation:Array<any>;
private showEdit: boolean = false;
dtOptions: DataTables.Settings = {};
selected_details: any = [];

   init_details = {
     _id: "",
     designation: ""
   };
   first: number = 0;
   tablerows = [5,10,25,50,100];
   tableshow = 10;
  constructor(private _designationService: DesignationService) { }

  ngOnInit() {  

   this.getDes();
   this.dtOptions = {
    pagingType: 'full_numbers'
    
  };

  }
  changeShowList(){
    this.getDes();
    console.log('changeShow');
  }


  // console.log(this.designations);



  showAdd(){
      this.showEdit = false;
  }

  getDes(){
  this._designationService.getDesignations()
      .subscribe((value) => {
        this.designations = value;
        console.log(this.designations);
      });

  }

  AddVideo(value: Designation) {
    console.log(value);
    this._designationService.addDesignation(value)
      .subscribe((resvalue) => {
        this.addeddesignations = resvalue;
        console.log("in Comp");
        console.log(this.addeddesignations);
         this.designation = null; 
         this.getDes();
         
      });   
     
  }

  updateDetails(value: Designation){
    this.selected_details = value;
    console.log(this.selected_details); 
    this.showEdit = true;
  }

  UpdateDes(){
    console.log("seleted");
    console.log(this.selected_details);
    this._designationService.updateDesignation(this.selected_details)
      .subscribe((resValue) => {
          this.updateddesignations = resValue;
          console.log("Updated");
          console.log(this.updateddesignations);
            this.selected_details = this.init_details;
          this.getDes();
        
      });
    
  }
  deleteDes(des){
      this._designationService.deleteDesignation(des)
      .subscribe((resValue) => {
           this.deletedddesignation = resValue;
            console.log(this.deletedddesignation);
            this.getDes();
      });
  }
}
