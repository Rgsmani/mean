import { Component, OnInit } from '@angular/core';
import { Role } from '../models/roleModel';
import { RoleService } from '../services/role.service';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  providers: [RoleService]
})
export class RoleComponent implements OnInit {

  // private designations;
  roles: Array<Role>;
  addedroles: Array<Role>;
  updatedroles: Array<Role>;
  deletedrole: Array<Role>;
  role:Array<any>;

private showEdit: boolean = false;

selected_details: any = [];

   init_details = {
     _id: "",
     role: ""
   };


  constructor(private _roleService: RoleService) { }

  ngOnInit() {  

   this.getRoles();

  }


  // console.log(this.designations);



  showAdd(){
      this.showEdit = false;
  }

  getRoles(){
  this._roleService.getRoles()
      .subscribe((value) => {
        this.roles = value;
        console.log("getRoles");
        console.log(this.roles);
      });

  }

  AddRole(value: Role) {
    console.log(value);
    this._roleService.addRole(value)
      .subscribe((resvalue) => {
        this.addedroles = resvalue;
        console.log("in Comp");
        console.log(this.addedroles);
         this.role= null; 
         this.getRoles();         
      });   
     
  }

  updateDetails(value: Role){
    this.selected_details = value;
    console.log("updated details");
    console.log(this.selected_details); 
    this.showEdit = true;
  }

  UpdateRole(){
    console.log("selected");
    console.log(this.selected_details);
    this._roleService.updateRole(this.selected_details)
      .subscribe((resValue) => {
          this.updatedroles = resValue;
          console.log("Updated");
          console.log(this.updatedroles);
            this.selected_details = this.init_details;
          this.getRoles();
           this.showEdit = false;
      });
    
  }
  deleteRole(des){
      this._roleService.deleteRole(des)
      .subscribe((resValue) => {
           this.deletedrole = resValue;
            console.log(this.deletedrole);
            this.getRoles();
      });
  }

}
