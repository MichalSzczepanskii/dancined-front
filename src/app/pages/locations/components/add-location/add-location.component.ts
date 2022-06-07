import {Component, OnDestroy, OnInit} from '@angular/core';
import {TableEntityFormComponent} from '../../../../core/abstract-components/table-entity-form.component';
import {FormBuilder, Validators} from '@angular/forms';
import {LocationsService} from '../../../../shared/services/locations.service';
import {LocationModel} from '../../../../shared/models/location.model';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.scss']
})
export class AddLocationComponent extends TableEntityFormComponent<LocationModel> implements OnInit{

  constructor(private formBuilder: FormBuilder,
              locationsService: LocationsService,
              messageService: MessageService) {
    super(locationsService, messageService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.editEntity?.name ?? '', {validators: [Validators.required], updateOn: 'blur'}],
      description: [this.editEntity?.description ?? ''],
      address: [this.editEntity?.address ?? '', {validators: [Validators.required], updateOn: 'blur'}]
    })
  }

}
