import { Component, OnInit } from '@angular/core';
import { LocationsService } from '../../shared/services/locations.service';
import { TableIndexComponent } from '../../core/abstract-components/table-index.component';
import { LocationModel } from '../../shared/models/location.model';
import { LocationsPermissions } from '../../shared/constants/permissions/locations-permissions';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent extends TableIndexComponent<LocationModel> implements OnInit {
  readonly locationsPermissions = LocationsPermissions;

  constructor(private locationsService: LocationsService) {
    super(locationsService);
  }

  ngOnInit(): void {
    this.title = 'Lokalizacje';
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nazwa' },
      { field: 'description', header: 'Opis' },
      { field: 'address', header: 'Adres' },
    ];
  }
}
