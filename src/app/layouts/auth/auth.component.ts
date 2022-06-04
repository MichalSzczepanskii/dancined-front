import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div class="flex">
      <app-sidebar></app-sidebar>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
