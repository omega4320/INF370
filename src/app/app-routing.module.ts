import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// SideNav Components
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { EmployeesComponent } from './employees/employees.component';
import { ClientsComponent } from './clients/clients.component';

import { NavigationComponent } from '../components/navigation/navigation.component';

// Administration components
import { ServicesComponent } from './administration/services/services.component';
import { EmployeeTypeComponent } from './administration/employee-type/employee-type.component';
import { LocationComponent } from './administration/location/location.component';
import { AuditTrailComponent } from './administration/audit-trail/audit-trail.component';
import { HelpComponent } from './administration/help/help.component';


const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'}, //setting login page as default page
  {path:'login', component: LoginComponent},
  {
    path:'',
    component: NavigationComponent,  //navigation layout wraps child views
    children:[

      {path:'dashboard', component: DashboardComponent},
      {path:'manage-jobs', component: ManageJobsComponent},
      {path:'employees', component: EmployeesComponent},
      {path:'clients', component: ClientsComponent},
      
      {
        path: 'administration',
        children: [
          { path: 'services', component: ServicesComponent },
          { path: 'employee-type', component: EmployeeTypeComponent},
          { path: 'location', component: LocationComponent },
          { path: 'audit-trail', component: AuditTrailComponent },
          { path: 'help', component: HelpComponent }
        ]
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
