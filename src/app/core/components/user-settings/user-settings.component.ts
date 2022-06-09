import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-settings',
  template: `
    <div class="flex justify-between items-center ">
      <div class="username hidden-text">
        {{ username }}
      </div>
      <div><i class="pi pi-cog text-lg icon" (click)="menu.toggle($event)"></i></div>
    </div>
    <p-menu #menu [model]="items" [popup]="true" appendTo="body"></p-menu>
  `,
  styles: [
    `
      .icon:hover {
        @apply text-gray-300 cursor-pointer;
      }
      .username {
        font-size: 0.95rem;
      }
    `,
  ],
})
export class UserSettingsComponent implements OnInit {
  username: string = '';
  items: MenuItem[] = [
    {
      label: 'Wyloguj',
      icon: 'pi pi-sign-out',
      command: () => this.logout(),
    },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.authService.getUserFirstname();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
