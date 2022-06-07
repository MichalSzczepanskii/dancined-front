import {BaseEntityModel} from '../../core/models/base-entity.model';

export interface LessonTypeModel extends BaseEntityModel {
  name: string;
  description?: string;
}
