import { ComponentRef, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlarmDetailComponent } from './alarm/alarmDetail/alarmDetail.component';
import { AlarmListComponent } from './alarm/alarmList/alarmList.component';
import { HomeComponent } from './alarm/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: 'alarm/list', component: AlarmListComponent},
  {path: 'alarm/edit', component: AlarmDetailComponent},
  {path: 'alarm/create', component: AlarmDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
