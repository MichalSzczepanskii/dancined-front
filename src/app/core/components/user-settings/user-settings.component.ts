import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-settings',
  template: `
    <div class="flex justify-between items-center ">
      <div class="username hidden-text">
        Username
      </div>
      <div><i class="pi pi-cog text-lg icon" (click)="menu.toggle($event)"></i></div>
    </div>
    <p-menu #menu [model]="items" [popup]="true" appendTo="body"></p-menu>
  `,
  styles: [`
    .icon:hover {
      @apply text-gray-300 cursor-pointer;
    }
    .username {
      font-size: 0.95rem;
    }
  `
  ]
})
export class UserSettingsComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: 'Wyloguj',
      icon: 'pi pi-sign-out',
      command: () => this.logout(),
    }
  ]

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
