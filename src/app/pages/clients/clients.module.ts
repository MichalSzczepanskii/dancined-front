import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ClientsComponent,
      },
    ]),
    TableModule,
    SidebarModule,
    MenuModule,
    NgxPermissionsModule,
  ],
})
export class ClientsModule {}
