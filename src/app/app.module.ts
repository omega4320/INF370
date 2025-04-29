// General module and component imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Sidenav components
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { EmployeesComponent } from './employees/employees.component';
import { ClientsComponent } from './clients/clients.component';

// Navigation Component
import { NavigationComponent } from '../components/navigation/navigation.component';

// Components related to Administration
import { ServicesComponent } from './administration/services/services.component';
import { EmployeeTypeComponent } from './administration/employee-type/employee-type.component';
import { LocationComponent } from './administration/location/location.component';
import { AuditTrailComponent } from './administration/audit-trail/audit-trail.component';
import { HelpComponent } from './administration/help/help.component';

// Material Module
import { MaterialModule } from './shared/material/material.module';

// Modules related to calendar date/time pickers
import {provideNativeDateAdapter} from '@angular/material/core';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavigationComponent,
    ManageJobsComponent,
    ServicesComponent,
    EmployeesComponent,

    LocationComponent,
    AuditTrailComponent,
    HelpComponent,
    EmployeeTypeComponent,
    ClientsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MaterialModule
  ],
  providers: [provideHttpClient(),provideNativeDateAdapter()],
  bootstrap: [AppComponent]
})
export class AppModule { }
