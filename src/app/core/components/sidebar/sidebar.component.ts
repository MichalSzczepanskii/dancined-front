import {Component, HostListener, OnInit} from '@angular/core';
import {NAVIGATION_ITEMS} from '../../constants/navigation-items.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  readonly HIDE_WIDTH = 1000;
  navigationItems = NAVIGATION_ITEMS;
  title = '';
  hide = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.hide = window.innerWidth < this.HIDE_WIDTH;
    this.title =
      this.navigationItems
        .filter((group) =>
          group.items.filter(item =>
            item.route === this.router.url))[0].items[0].title;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.hide = window.innerWidth < this.HIDE_WIDTH;
  }

}
