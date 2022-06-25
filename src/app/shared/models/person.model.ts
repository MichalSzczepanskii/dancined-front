import { BaseEntityModel } from '../../core/models/base-entity.model';
import * as moment from 'moment';

export interface PersonModel extends BaseEntityModel {
  first_name: string;
  last_name: string;
  birth_date: moment.Moment;
  pesel: string;
  phone: string;
}
