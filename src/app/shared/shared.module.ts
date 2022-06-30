import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputErrorPipe } from './pipes/input-error.pipe';
import { PluckPipe } from './pipes/pluck.pipe';

@NgModule({
  declarations: [InputErrorPipe, PluckPipe],
  imports: [CommonModule],
  exports: [InputErrorPipe, PluckPipe],
})
export class SharedModule {}
