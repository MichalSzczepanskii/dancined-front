import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import {RouterModule} from '@angular/router';
import {TableModule} from 'primeng/table';
import {SkeletonModule} from 'primeng/skeleton';
import { AddLocationComponent } from './components/add-location/add-location.component';



@NgModule({
  declarations: [
    LocationsComponent,
    AddLocationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LocationsComponent},
      {path: 'add', component: AddLocationComponent}
    ]),
    TableModule,
    SkeletonModule
  ]
})
export class LocationsModule { }
