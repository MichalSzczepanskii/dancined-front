import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RoomsService } from '../../../../shared/services/rooms.service';
import { MessageService } from 'primeng/api';
import { TableEntityFormComponent } from '../../../../core/abstract-components/table-entity-form.component';
import { RoomModel } from '../../../../shared/models/room.model';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent extends TableEntityFormComponent<RoomModel> implements OnInit {
  constructor(private formBuilder: FormBuilder, roomsService: RoomsService, messageService: MessageService) {
    super(roomsService, messageService);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.editEntity?.name ?? '', { validators: [Validators.required], updateOn: 'blur' }],
      description: [this.editEntity?.description ?? ''],
    });
  }
}
