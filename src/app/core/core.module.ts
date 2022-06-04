import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import {MenuModule} from 'primeng/menu';



@NgModule({
    declarations: [
        SidebarComponent,
        UserSettingsComponent
    ],
    exports: [
        SidebarComponent
    ],
  imports: [
    CommonModule,
    MenuModule,
  ]
})
export class CoreModule { }
