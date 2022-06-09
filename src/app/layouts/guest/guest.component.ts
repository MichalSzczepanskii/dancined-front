import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest',
  template: ` <router-outlet></router-outlet> `,
  styles: [],
})
export class GuestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
