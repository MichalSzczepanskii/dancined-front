import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadEvent, MenuItem } from 'primeng/api';
import { finalize } from 'rxjs';
import { CrudService } from '../services/crud.service';
import { Menu } from 'primeng/menu';
import { BaseEntityModel } from '../models/base-entity.model';
import { Sidebar } from 'primeng/sidebar';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-table-index',
  template: '',
})
export class TableIndexComponent<T extends BaseEntityModel> {
  title: string = '';
  data: any[];
  cols: any[];
  loading: boolean = true;
  totalRecords: number = 0;
  display = false;
  lastLazyEvent: LazyLoadEvent;
  items: MenuItem[];
  editEntity: T | null;
  showEditMenuItem = true;
  showDeleteMenuItem = true;
  @ViewChild('menu') menu: Menu;

  constructor(private crudService: CrudService<T>) {}

  loadData(event: LazyLoadEvent) {
    this.lastLazyEvent = event;
    this.crudService
      .getAll({ lazyEvent: event })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe(res => {
        console.log(res);
        this.data = res.data;
        this.totalRecords = res.meta.total;
      });
  }

  deleteRow(id: number) {
    this.crudService.delete(id).subscribe({
      next: res => {
        console.log(res);
        this.loadData(this.lastLazyEvent);
      },
      error: err => {
        console.log(err);
      },
    });
  }

  showOptionMenu(data: T, event: Event) {
    const editItem = {
      label: 'Edytuj',
      icon: 'pi pi-pencil',
      command: () => {
        this.editEntity = data;
        this.display = true;
      },
    };
    const deleteItem = {
      label: 'Usuń',
      icon: 'pi pi-trash',
      command: () => {
        this.deleteRow(data.id);
      },
    };
    this.items = [];
    if (this.showEditMenuItem) this.items.push(editItem);
    if (this.showDeleteMenuItem) this.items.push(deleteItem);
    this.menu.toggle(event);
  }
}
