import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms.component';
import { AddRoomComponent } from './components/add-room/add-room.component';
import { TableModule } from 'primeng/table';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [RoomsComponent, AddRoomComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RoomsComponent }]),
    TableModule,
    ReactiveFormsModule,
    SharedModule,
    SidebarModule,
    MenuModule,
    DropdownModule,
    FormsModule,
  ],
})
export class RoomsModule {}
