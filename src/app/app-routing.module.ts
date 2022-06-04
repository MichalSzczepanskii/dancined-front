import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./layouts/auth/auth.module').then(m => m.AuthModule)},
  { path: 'login', loadChildren: () => import('./layouts/guest/guest.module').then(m => m.GuestModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
