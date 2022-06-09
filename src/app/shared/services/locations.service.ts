import { Injectable } from '@angular/core';
import { CrudService } from '../../core/services/crud.service';
import { LocationModel } from '../models/location.model';
import { HttpClient } from '@angular/common/http';
import { CriteriaService } from '../../core/services/criteria.service';

@Injectable({
  providedIn: 'root',
})
export class LocationsService extends CrudService<LocationModel> {
  override name = 'locations';

  constructor(http: HttpClient, criteriaService: CriteriaService) {
    super(http, criteriaService);
  }
}
