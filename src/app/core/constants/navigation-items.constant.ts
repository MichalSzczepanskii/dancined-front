import { NavigationItemsGroupModel } from '../models/navigation-items-group.model';
import { LocationsPermissions } from '../../shared/constants/permissions/locations-permissions';
import { RoomsPermissions } from '../../shared/constants/permissions/rooms-permissions';
import { LessonTypesPermissions } from '../../shared/constants/permissions/lesson-types-permissions';
import { ClientsPermissions } from '../../shared/constants/permissions/clients-permissions';

export const NAVIGATION_ITEMS: NavigationItemsGroupModel[] = [
  {
    items: [
      {
        title: 'Dashboard',
        route: '',
        icon: 'pi pi-home',
      },
      {
        title: 'Klienci',
        route: '/clients',
        icon: 'pi pi-users',
        permissions: ClientsPermissions.READ_ALL,
      },
    ],
  },
  {
    name: 'Słowniki',
    items: [
      {
        title: 'Lokalizacje',
        route: '/locations',
        icon: 'pi pi-compass',
        permissions: LocationsPermissions.READ_ALL,
      },
      {
        title: 'Sale',
        route: '/rooms',
        icon: 'pi pi-building',
        permissions: RoomsPermissions.READ_ALL,
      },
      {
        title: 'Typy zajęć',
        route: '/lesson-types',
        icon: 'pi pi-palette',
        permissions: LessonTypesPermissions.READ_ALL,
      },
    ],
  },
];
