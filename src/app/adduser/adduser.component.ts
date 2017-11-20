
import {Component,OnInit, ElementRef, ViewChild} from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/userModel';
import { Designation } from '../models/designationModel';
import { DesignationService } from '../services/designation.service';
import { Department } from '../models/departmentModel';
import { DepartmentService } from '../services/department.service';
import { Role } from '../models/roleModel';
import { RoleService } from '../services/role.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers:[UsersService, DesignationService, DepartmentService, RoleService]
})
export class UserComponent implements OnInit {


  @ViewChild('filter') filter: ElementRef;


 designations: Array<Designation>;
  departments: Array<Department>;
  roles: Array<Role>;
   user: Array<User>;
    users: Array<User>;
  adding_values: any = [];
selected_details: any = [];
updateduser: any = [];
deleteduser: any= [];
private showEdit: boolean = false;
private showAdd: boolean = false;
private showList: boolean = true;

private showTeamLead: boolean = false;
private showManager: boolean = false;
first: number = 0;
  constructor(private _usersService: UsersService, private _designationService: DesignationService,
  private _departmentService: DepartmentService, private _roleService: RoleService ) { }

bloodgroups = ['A+','O+','B+','AB+','A-','O-','B-','AB-'];

shifts = ['Morning','Evening', 'Night'];

tablerows = [5,10,25,50,100];
tableshow = 10;
  ngOnInit() {
    //this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator);
    this.getUsers();
    this.getDesignations();
     this.getDepartments();
      this.getRoles();   
    
  }

   getDesignations(){
  this._designationService.getDesignations()
      .subscribe((value) => {
        this.designations = value;
        console.log("getRoles");
        console.log(this.designations);
      });

  }

   getDepartments(){
  this._departmentService.getDepartments()
      .subscribe((value) => {
        this.departments = value;
        console.log("getRoles");
        console.log(this.departments);
      });
  }

  getRoles(){
  this._roleService.getRoles()
      .subscribe((value) => {
        this.roles = value;
        console.log("getRoles");
        console.log(this.roles);
      });
  }

    AddUser(value: User){
    
    if(!value.teamlead){
      value.teamlead = "";
    }
     if(!value.manager){
      value.manager = "";
    }

    console.log(value.teamlead);
    this._usersService.AddUser(value)
      .subscribe((value) => {
        this.user = value;     
        console.log(this.user);
        this.getUsers();
         this.showEdit = false;
         this.showAdd = false;
           this.showList = true;
           this.adding_values = [];
      });
  }

  getUsers(){
    this._usersService.getUsers()
      .subscribe((value) => {
        this.users = value;     
        console.log(this.user);
      });
  }

 updateDetails(value: User){
    this.selected_details = value;
    console.log("updated details");
    console.log(this.selected_details); 
    this.showEdit = true;
    this.showAdd = false;
    this.showList = false;
  }

  showAddPage(){
 this.showEdit = false;
    this.showAdd = true;
    this.showList = false;
  }
   showManageUserPage(){
 this.showEdit = false;
    this.showAdd = false;
    this.showList = true;
    this.selected_details = [];
    console.log(this.selected_details);
  }

  updateUser(){
    console.log("selected");
    console.log(this.selected_details);
    this._usersService.updateUser(this.selected_details)
      .subscribe((resValue) => {
          this.updateduser = resValue;
          console.log("Updated");
          console.log(this.updateduser);
            this.selected_details = [];
          this.getUsers();
          this.showEdit = false;
        this.showAdd = false;
           this.showList = true;
      });    
  }


  deleteUser(value){
      this._usersService.deleteUser(value)
      .subscribe((resValue) => {
           this.deleteduser = resValue;
            console.log(this.deleteduser);
              this.getUsers();
      });
  }
  resetUser(){
    this.selected_details = [];
     this.adding_values = [];
  }
  addTeamLead(){
    this.showTeamLead = !this.showTeamLead;
   
  }
   addManager(){
    this.showManager = !this.showManager;
    
  }

  changeShowList(){
    this.getUsers();
    console.log('changeShow');
  } 

  //  bloodgroups = [
  //   {value: 'A+'},
  //   {value: 'O+'},
  //   {value: 'B+'},
  //   {value: 'AB+'},
  //   {value: 'A-'},
  //   {value: 'O-'},
  //   {value: 'B-'},
  //   {value: 'AB-'}
  // ];
    
  //    roles = [
  //   {value: 'Admin'},
  //   {value: 'Team Lead'},
  //   {value: 'Quality Analyst'}
  // ];

  
}

