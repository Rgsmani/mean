import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './routes/app.routes.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// import { MaterialModule,
//           MdSidenavModule,
//           MdDatepickerModule,
//           DateAdapter,
//           MdNativeDateModule
// } from '@angular/material';

import { DataTableModule, SharedModule } from 'primeng/primeng';

import { ExampleMaterialModule } from './material-module';


import {ToastModule} from 'ng2-toastr/ng2-toastr';
// import {MatMenuModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import 'hammerjs';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
// import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './adduser/adduser.component';
import { DesignationComponent } from './designation/designation.component';
import { RoleComponent } from './role/role.component';
import { DepartmentComponent } from './department/department.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { FormListComponent } from './form-list/form-list.component';

const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UsersComponent,
    UserComponent,
    DesignationComponent,
    RoleComponent,
    DepartmentComponent,
    FormGeneratorComponent,
    DynamicFormComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    routing,
    ExampleMaterialModule,
    NoopAnimationsModule,
    DataTableModule,
    SharedModule,
//      MaterialModule,
//     MdSidenavModule,
//     MdDatepickerModule,
// MdNativeDateModule,
    DataTablesModule,
    NgxDatatableModule,
    ToastModule.forRoot(),
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
