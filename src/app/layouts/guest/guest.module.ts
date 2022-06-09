import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestComponent } from './guest.component';
import { GuestRoutingModule } from './guest-routing.module';

@NgModule({
  declarations: [GuestComponent],
  imports: [CommonModule, GuestRoutingModule],
})
export class GuestModule {}
