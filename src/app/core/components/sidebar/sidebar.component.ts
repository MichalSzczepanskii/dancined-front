import { Component, OnInit } from '@angular/core';
import {NAVIGATION_ITEMS} from '../../constants/navigation-items.constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navigationItems = NAVIGATION_ITEMS;
  title = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.title =
      this.navigationItems
        .filter((group) =>
          group.items.filter(item =>
            item.route === this.router.url))[0].items[0].title;
  }

}
