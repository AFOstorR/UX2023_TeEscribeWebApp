import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { AppHeaderModule } from '../app-header/app-header.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppHeaderModule
  ],
  declarations: [LoginComponent, SignupComponent],
  exports: [LoginComponent, SignupComponent]

})
export class UserModule { }
