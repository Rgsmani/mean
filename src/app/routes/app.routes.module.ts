import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
// import { UserComponent } from '../user/user.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../adduser/adduser.component';
import { DesignationComponent } from '../designation/designation.component';
import { RoleComponent } from '../role/role.component';
import { DepartmentComponent } from '../department/department.component';


export const routes: Routes = [
   { path: 'login', component:LoginComponent },
   { path: 'home', component: HomeComponent,
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
         { path: 'dashboard', component: DashboardComponent },
        { path: 'users', component: UsersComponent },
        { path: 'user', component: UserComponent },
         { path: 'designation', component: DesignationComponent },
          { path: 'role', component: RoleComponent },
          { path: 'department', component: DepartmentComponent }
      ]
      
 },
      { path: '', component: LoginComponent },
      { path: '**', component: LoginComponent }

  // { path: '', redirectTo: 'component-one', pathMatch: 'full' },
  // { path: 'component-one', component: ComponentOne },
  // { path: 'component-two/:id', component: ComponentTwo,
  //   children: [
  //     { path: '', redirectTo: 'child-one', pathMatch: 'full' },
  //     { path: 'child-one', component: ChildOne },
  //     { path: 'child-two', component: ChildTwo,
  //       children: [
  //         { path: '', redirectTo: 'child-one', pathMatch: 'full' },
  //         { path: 'child-one', component: ChildOne },
  //         { path: 'child-two-nested', component: ChildTwoNested }
  //       ]
  //     }
  //   ]
  // }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);