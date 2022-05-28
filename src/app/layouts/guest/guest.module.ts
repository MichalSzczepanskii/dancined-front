import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule)}
    ])
  ]
})
export class GuestModule { }
