
import {NavigationItemsGroupModel} from '../models/navigation-items-group.model';

export const NAVIGATION_ITEMS: NavigationItemsGroupModel[] = [
  {
    items: [
      {
        title: 'Dashboard',
        route: '',
        icon: 'pi pi-home',
      }
    ]
  },
  {
    name: 'Słowniki',
    items: [
      {
        title: 'Lokalizacje',
        route: '/locations',
        icon: 'pi pi-compass'
      },
      {
        title: 'Sale',
        route: '/rooms',
        icon: 'pi pi-building'
      },
      {
        title: 'Typy zajęć',
        route: '/lesson-types',
        icon: 'pi pi-palette'
      }
    ]
  }
]
