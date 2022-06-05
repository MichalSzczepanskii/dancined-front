import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import {MenuModule} from 'primeng/menu';
import {HttpClient} from '@angular/common/http';



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
