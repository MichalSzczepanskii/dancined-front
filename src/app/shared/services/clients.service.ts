import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';
import { CrudService } from '../../core/services/crud.service';
import { HttpClient } from '@angular/common/http';
import { CriteriaService } from '../../core/services/criteria.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsService extends CrudService<UserModel> {
  override name = 'clients';

  constructor(http: HttpClient, criteriaService: CriteriaService) {
    super(http, criteriaService);
  }
}
