import { PersonModel } from './person.model';
import { BaseEntityModel } from '../../core/models/base-entity.model';

export interface UserModel extends BaseEntityModel {
  email: string;
  person: PersonModel;
  role: string;
}
