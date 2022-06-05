import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputErrorPipe} from './pipes/input-error.pipe';



@NgModule({
  declarations: [
    InputErrorPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputErrorPipe
  ]
})
export class SharedModule { }
