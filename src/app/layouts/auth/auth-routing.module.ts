import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { LocationsPermissions } from '../../shared/constants/permissions/locations-permissions';
import { LessonTypesPermissions } from '../../shared/constants/permissions/lesson-types-permissions';
import { RoomsPermissions } from '../../shared/constants/permissions/rooms-permissions';
import { ClientsPermissions } from '../../shared/constants/permissions/clients-permissions';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      {
        path: 'clients',
        loadChildren: () => import('../../pages/clients/clients.module').then(m => m.ClientsModule),
        data: {
          permissions: {
            only: ClientsPermissions.READ_ALL,
            redirectTo: '/',
          },
        },
      },
      {
        path: 'locations',
        loadChildren: () => import('../../pages/locations/locations.module').then(m => m.LocationsModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: LocationsPermissions.READ_ALL,
            redirectTo: '/',
          },
        },
      },
      {
        path: 'lesson-types',
        loadChildren: () => import('../../pages/lesson-types/lesson-types.module').then(m => m.LessonTypesModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: LessonTypesPermissions.READ_ALL,
            redirectTo: '/',
          },
        },
      },
      {
        path: 'rooms',
        loadChildren: () => import('../../pages/rooms/rooms.module').then(m => m.RoomsModule),
        canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: RoomsPermissions.READ_ALL,
            redirectTo: '/',
          },
        },
      },
      {
        path: 'user',
        loadChildren: () => import('../../pages/user-details/user-details.module').then(m => m.UserDetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
