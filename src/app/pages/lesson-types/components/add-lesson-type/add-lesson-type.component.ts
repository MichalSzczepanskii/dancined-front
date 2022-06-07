import { Component, OnInit } from '@angular/core';
import {TableEntityFormComponent} from '../../../../core/abstract-components/table-entity-form.component';
import {LessonTypeModel} from '../../../../shared/models/lesson-type.model';
import {FormBuilder, Validators} from '@angular/forms';
import {LessonTypesService} from '../../../../shared/services/lesson-types.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-lesson-type',
  templateUrl: './add-lesson-type.component.html',
  styleUrls: ['./add-lesson-type.component.scss']
})
export class AddLessonTypeComponent extends TableEntityFormComponent<LessonTypeModel> implements OnInit {

  constructor(private formBuilder: FormBuilder,
              lessonTypesService: LessonTypesService,
              messageService: MessageService) {
    super(lessonTypesService, messageService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.editEntity?.name ?? '', {validators: [Validators.required], updateOn: 'blur'}],
      description: [this.editEntity?.description ?? '']
    })
  }

}
