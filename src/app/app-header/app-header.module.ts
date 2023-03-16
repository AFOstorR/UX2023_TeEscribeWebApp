import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AppHeaderComponent],
  exports: [AppHeaderComponent]
})
export class AppHeaderModule { }
