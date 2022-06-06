import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {PaginationModel} from '../models/pagination.model';
import {CriteriaService} from './criteria.service';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {
  readonly BASE_URL = environment.apiUrl;
  name: string;

  constructor(private http: HttpClient,
              private criteriaService: CriteriaService) { }

  getAll(data?: any): Observable<PaginationModel<T>> {
    return this.http.get<PaginationModel<T>>(`${this.BASE_URL}${this.name}`,
      {params: this.criteriaService.buildTableQuery(data?.lazyEvent)});
  }
}