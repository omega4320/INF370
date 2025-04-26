import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageJobsComponent } from './manage-jobs/manage-jobs.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { AdministrationComponent } from './administration/administration.component';

const routes: Routes = [

  {path:'', redirectTo:'login', pathMatch:'full'}, //setting login page as default page
  {path:'login', component: LoginComponent},
  {
    path:'',
    component: NavigationComponent,  //navigation layout wraps child views
    children:[
      {path:'dashboard', component: DashboardComponent},
      {path:'manage-jobs', component: ManageJobsComponent},
      {path:'manage-employees', component: ManageEmployeesComponent},
      {path:'administration', component: AdministrationComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
