import { Component, OnInit } from '@angular/core';
import {LazyLoadEvent} from 'primeng/api';
import {finalize} from 'rxjs';
import {CrudService} from '../services/crud.service';

@Component({
  selector: 'app-table-index',
  template: '',
})
export class TableIndexComponent<T> {
  title: string = '';
  data: any[];
  cols: any[];
  loading: boolean = true;
  totalRecords: number = 0;

  constructor(private crudService: CrudService<T>) { }

  loadData(event: LazyLoadEvent) {
    console.log(event);
    this.crudService.getAll({lazyEvent: event})
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe((res) => {
        console.log(res)
        this.data = res.data;
        this.totalRecords = res.meta.total;
      })
  }
}
