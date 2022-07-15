import { Component, OnInit } from '@angular/core';
import { TableIndexComponent } from '../../core/abstract-components/table-index.component';
import { UserModel } from '../../shared/models/user.model';
import { ClientsPermissions } from '../../shared/constants/permissions/clients-permissions';
import { ClientsService } from '../../shared/services/clients.service';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent extends TableIndexComponent<UserModel> implements OnInit {
  readonly clientsPermissions = ClientsPermissions;
  relationFields = ['first_name', 'last_name', 'pesel', 'phone'];

  constructor(private clientsService: ClientsService, private permissionsService: NgxPermissionsService) {
    super(clientsService);
  }

  ngOnInit(): void {
    this.title = 'Klienci';
    this.cols = [
      { field: 'id', header: 'ID', sortColumn: 'users.id' },
      { field: 'email', header: 'Email', sortColumn: 'users.email' },
      { field: 'person.first_name', header: 'Imię', sortColumn: 'people.first_name' },
      { field: 'person.last_name', header: 'Nazwisko', sortColumn: 'people.last_name' },
      { field: 'person.pesel', header: 'PESEL', sortColumn: 'people.pesel' },
      { field: 'person.phone', header: 'Telefon', sortColumn: 'people.phone' },
    ];
    this.showEditMenuItem = !!this.permissionsService.getPermission(ClientsPermissions.UPDATE);
    this.showDeleteMenuItem = !!this.permissionsService.getPermission(ClientsPermissions.DELETE);
  }
}
