import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { finalize } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'submit' }],
      password: ['', { validators: [Validators.required], updateOn: 'submit' }],
      rememberMe: [false],
    });
  }

  onSubmit(): void {
    if (!this.form.valid) {
      this.form.controls['email'].markAsDirty();
      if (this.form.controls['email'].valid) this.form.controls['password'].markAsDirty();
      return;
    }
    this.form.disable();
    this.authService
      .login(this.form.value)
      .pipe(
        finalize(() => {
          this.form.enable();
          this.form.markAsPristine();
        })
      )
      .subscribe({
        next: () => {
          this.router.navigate(['/']);
        },
        error: (err: HttpResponse<any>) => {
          if (err.status === 401) {
            this.messageService.add({
              severity: 'error',
              summary: 'Błąd',
              detail: 'Błędne dane logowania',
            });
            this.form.controls['password'].setValue('');
          }
        },
      });
    // console.log(this.form.valid);
  }

  get fc(): any {
    return this.form.controls;
  }

  displayError(controlName: string): boolean {
    return this.form.controls[controlName].invalid && this.form.controls[controlName].dirty;
  }
}
