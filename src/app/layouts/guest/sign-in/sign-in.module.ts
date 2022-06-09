import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../../app.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SignInComponent,
      },
    ]),
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SignInModule {}
