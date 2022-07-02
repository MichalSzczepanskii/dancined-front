import { Component, OnInit } from '@angular/core';
import { TableIndexComponent } from '../../core/abstract-components/table-index.component';
import { LessonTypeModel } from '../../shared/models/lesson-type.model';
import { LessonTypesService } from '../../shared/services/lesson-types.service';
import { DialogService } from 'primeng/dynamicdialog';
import { LessonTypesPermissions } from '../../shared/constants/permissions/lesson-types-permissions';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-lesson-types',
  templateUrl: './lesson-types.component.html',
  styleUrls: ['./lesson-types.component.scss'],
})
export class LessonTypesComponent extends TableIndexComponent<LessonTypeModel> implements OnInit {
  constructor(
    private lessonTypesService: LessonTypesService,
    private dialogService: DialogService,
    private permissionsService: NgxPermissionsService
  ) {
    super(lessonTypesService);
  }

  ngOnInit(): void {
    this.title = 'Typy zajęć';
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nazwa' },
      { field: 'description', header: 'Opis' },
    ];
    this.showEditMenuItem = !!this.permissionsService.getPermission(LessonTypesPermissions.UPDATE);
    this.showDeleteMenuItem = !!this.permissionsService.getPermission(LessonTypesPermissions.DELETE);
  }
}
