import { BaseEntityModel } from '../../core/models/base-entity.model';

export interface LocationModel extends BaseEntityModel {
  name: string;
  description?: string;
  address?: string;
}
