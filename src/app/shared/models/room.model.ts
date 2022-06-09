import { BaseEntityModel } from '../../core/models/base-entity.model';
import { LocationModel } from './location.model';

export interface RoomModel extends BaseEntityModel {
  name: string;
  description?: string;
  location: LocationModel;
}
