import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsComponent } from './locations.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { SkeletonModule } from 'primeng/skeleton';
import { AddLocationComponent } from './components/add-location/add-location.component';
import { SidebarModule } from 'primeng/sidebar';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [LocationsComponent, AddLocationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LocationsComponent },
      { path: 'add', component: AddLocationComponent },
    ]),
    TableModule,
    SkeletonModule,
    SidebarModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    MenuModule,
    NgxPermissionsModule,
  ],
})
export class LocationsModule {}
