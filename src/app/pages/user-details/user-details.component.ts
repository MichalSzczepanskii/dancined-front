import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { UserModel } from '../../shared/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  loading: boolean;
  userData: UserModel;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loading = true;
    this.authService.me().subscribe({
      next: user => {
        this.loading = false;
        this.userData = user;
        console.log(user);
      },
      error: error => {
        this.loading = false;
      },
    });
  }
}
