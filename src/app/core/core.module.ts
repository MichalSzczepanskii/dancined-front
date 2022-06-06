import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import {MenuModule} from 'primeng/menu';
import {HttpClient} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableIndexComponent } from './abstract-components/table-index.component';
import { TableStoreComponent } from './abstract-components/table-store.component';



@NgModule({
    declarations: [
        SidebarComponent,
        UserSettingsComponent,
        NavbarComponent,
        TableIndexComponent,
        TableStoreComponent
    ],
    exports: [
        SidebarComponent,
        NavbarComponent
    ],
  imports: [
    CommonModule,
    MenuModule,
  ]
})
export class CoreModule { }
