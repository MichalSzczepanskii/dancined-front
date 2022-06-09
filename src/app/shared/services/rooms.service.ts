import { Injectable } from '@angular/core';
import {CrudService} from '../../core/services/crud.service';
import {RoomModel} from '../models/room.model';
import {HttpClient} from '@angular/common/http';
import {CriteriaService} from '../../core/services/criteria.service';

@Injectable({
  providedIn: 'root'
})
export class RoomsService extends CrudService<RoomModel>{
  override name = 'rooms';

  constructor(http: HttpClient, criteriaService: CriteriaService) {
    super(http, criteriaService);
  }
}
