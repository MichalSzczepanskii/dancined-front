import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonTypesComponent } from './lesson-types.component';
import {RouterModule} from '@angular/router';
import {TableModule} from 'primeng/table';
import { AddLessonTypeComponent } from './components/add-lesson-type/add-lesson-type.component';
import {SharedModule} from '../../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';



@NgModule({
  declarations: [
    LessonTypesComponent,
    AddLessonTypeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: LessonTypesComponent}
    ]),
    TableModule,
    SharedModule,
    ReactiveFormsModule,
    SidebarModule,
    MenuModule
  ]
})
export class LessonTypesModule { }
