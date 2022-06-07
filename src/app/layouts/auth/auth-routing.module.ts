import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: '', loadChildren: () => import('../../pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'locations', loadChildren: () => import('../../pages/locations/locations.module').then(m => m.LocationsModule)},
      {path: 'lesson-types', loadChildren: () => import('../../pages/lesson-types/lesson-types.module').then(m => m.LessonTypesModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
