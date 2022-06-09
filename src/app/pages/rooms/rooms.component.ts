import { Component, OnInit } from '@angular/core';
import { TableIndexComponent } from '../../core/abstract-components/table-index.component';
import { RoomModel } from '../../shared/models/room.model';
import { RoomsService } from '../../shared/services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent extends TableIndexComponent<RoomModel> implements OnInit {
  constructor(private roomsService: RoomsService) {
    super(roomsService);
  }

  ngOnInit(): void {
    this.title = 'Sale';
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Nazwa' },
      { field: 'description', header: 'Opis' },
      { field: 'location.name', header: 'Lokalizacja' },
      { field: 'location.address', header: 'Adres' },
    ];
  }
}
