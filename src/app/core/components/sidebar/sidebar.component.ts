import { Component, HostListener, OnInit } from '@angular/core';
import { NAVIGATION_ITEMS } from '../../constants/navigation-items.constant';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  readonly HIDE_WIDTH = 1000;
  navigationItems = NAVIGATION_ITEMS;
  title = '';
  hide = false;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.hide = window.innerWidth < this.HIDE_WIDTH;
    this.title = 'Dancined'.toUpperCase();
    // this.router.events.pipe(
    //   filter(event => event instanceof NavigationEnd)
    // ).subscribe((val) => {
    //   console.log(this.navigationItems
    //     .filter((group) =>
    //       group.items.some(item =>
    //         item.route === (val as NavigationEnd).url)))
    //   this.title =
    //     this.navigationItems
    //       .filter((group) =>
    //         group.items.some(item =>
    //           item.route === (val as NavigationEnd).url))[0].items[0].title;
    // })
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.hide = window.innerWidth < this.HIDE_WIDTH;
  }
}
