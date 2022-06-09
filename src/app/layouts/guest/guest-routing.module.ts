import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [{ path: '', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRoutingModule {}
