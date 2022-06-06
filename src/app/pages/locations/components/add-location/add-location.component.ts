import { Component, OnInit } from '@angular/core';
import {TableStoreComponent} from '../../../../core/abstract-components/table-store.component';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent extends TableStoreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group([
      {name: []},
      {description: []},
      {address: []}
    ])
  }

}
