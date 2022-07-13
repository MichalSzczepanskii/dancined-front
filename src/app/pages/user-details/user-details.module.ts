import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserDetailsComponent,
      },
    ]),
    SkeletonModule,
    CardModule,
    TableModule,
  ],
})
export class UserDetailsModule {}
