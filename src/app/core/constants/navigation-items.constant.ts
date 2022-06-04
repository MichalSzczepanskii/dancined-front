
import {NavigationItemsGroupModel} from '../models/navigation-items-group.model';

export const NAVIGATION_ITEMS: NavigationItemsGroupModel[] = [
  {
    items: [
      {
        title: 'Dashboard',
        route: '',
        icon: 'pi pi-home',
      },
      {
        title: 'Login',
        route: 'login',
        icon: 'pi pi-home',
      }
    ]
  },
  {
    name: 'Słowniki',
    items: [
      {
        title: 'Instruktorzy',
        route: 'login',
        icon: 'pi pi-user',
      },
      {
        title: 'Klienci',
        route: 'login',
        icon: 'pi pi-users',
      },
      {
        title: 'Login',
        route: 'login',
        icon: 'pi pi-home',
      }
    ]
  }
]
