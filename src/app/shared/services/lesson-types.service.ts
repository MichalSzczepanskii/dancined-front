import { Injectable } from '@angular/core';
import {CrudService} from '../../core/services/crud.service';
import {LessonTypeModel} from '../models/lesson-type.model';
import {HttpClient} from '@angular/common/http';
import {CriteriaService} from '../../core/services/criteria.service';

@Injectable({
  providedIn: 'root'
})
export class LessonTypesService extends CrudService<LessonTypeModel>{
  override name = 'lesson_types';

  constructor(http: HttpClient, criteriaService: CriteriaService) {
    super(http, criteriaService);
  }
}
