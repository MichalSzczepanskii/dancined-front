import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: `
    <div class="flex ">
      <app-sidebar></app-sidebar>
      <div class="w-full max-h-screen overflow-y-auto">
        <app-navbar></app-navbar>
        <div class="px-8 py-5">
          <router-outlet></router-outlet>
        </div>
      </div>
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
