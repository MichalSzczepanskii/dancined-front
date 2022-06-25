import { Component, OnInit } from '@angular/core';
import { TableIndexComponent } from '../../core/abstract-components/table-index.component';
import { RoomModel } from '../../shared/models/room.model';
import { RoomsService } from '../../shared/services/rooms.service';
import { LocationsService } from '../../shared/services/locations.service';
import { LocationModel } from '../../shared/models/location.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent extends TableIndexComponent<RoomModel> implements OnInit {
  locations: LocationModel[];

  constructor(private roomsService: RoomsService, private locationsService: LocationsService) {
    super(roomsService);
  }

  ngOnInit(): void {
    this.title = 'Sale';
    this.cols = [
      { field: 'id', header: 'ID', sortColumn: 'rooms.id' },
      { field: 'name', header: 'Nazwa', sortColumn: 'rooms.name' },
      { field: 'description', header: 'Opis', sortColumn: 'rooms.description' },
      { field: 'location.name', header: 'Lokalizacja', sortColumn: 'locations.name' },
      { field: 'location.address', header: 'Adres', sortColumn: 'locations.address' },
    ];
    this.loading = true;
    this.locationsService.getAllRaw().subscribe(locations => {
      this.locations = locations;
      this.loading = false;
    });
  }
}
