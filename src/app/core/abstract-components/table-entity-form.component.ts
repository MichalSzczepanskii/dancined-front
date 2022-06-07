import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CrudService} from '../services/crud.service';
import {finalize} from 'rxjs';
import {MessageService} from 'primeng/api';
import {BaseEntityModel} from '../models/base-entity.model';

@Component({
  selector: 'app-table-store',
  template: ``,
  styles: []
})
export class TableEntityFormComponent<T extends BaseEntityModel>{
  @Output()
  closeClicked: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Output()
  addedRecord: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  editEntity: T | null;

  form: FormGroup;

  constructor(private crudService: CrudService<T>,
              private messageService: MessageService) {
  }

  close() {
    this.closeClicked.emit(false);
  }

  get fc(): any {
    return this.form.controls;
  }

  displayError(controlName: string): boolean {
    return (this.form.controls[controlName].invalid
      && ((this.form.controls[controlName].dirty) || this.form.controls[controlName].touched));
  }

  submit() {
    this.form.disable();
    this.form.markAsDirty();
    if(this.editEntity) this.editRecord();
    else this.addRecord();
    const observable = this.editEntity ? this.editRecord() : this.addRecord();
    if(!observable) return;
    observable.pipe(finalize(() => {
      this.form.enable();
    }))
      .subscribe({
        next: (res) => {
          this.form.reset();
          this.addedRecord.emit(true);
          this.closeClicked.emit(false);
        },
        error: (res) => {
          //422 - błąd walidacji
          console.log(res.error.message);
          this.messageService.add({
            severity: 'error',
            summary: 'Błąd',
            detail: res.error.message
          })
        },
      });
  }

  addRecord() {
    return this.crudService.add(this.form.value)
  }

  editRecord() {
    if(this.editEntity?.id === undefined || this.editEntity?.id === null) {
      this.messageService.add({
        severity: 'error',
        summary: 'Błąd',
        detail: 'Nastąpił błąd podczas edycji'
      })
      this.form.enable();
      return;
    }
    return this.crudService.edit(this.editEntity.id, this.form.value)
  }

}
