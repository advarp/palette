import { Component, OnDestroy, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SidebarService } from '../../services/sidebar.service';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';


const sidebarSlideAnimation = [
  trigger('sidebarState', [
    transition('void => *', [
      style({transform: 'translateX(100%)'}),
      animate(200, style({transform: 'translateX(0)'}))
    ]),
    transition('* => void', [
      animate(150, style({transform: 'translateX(100%)'}))
    ])
  ])
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: sidebarSlideAnimation
})
export class SidebarComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  showSidebar = false;

  constructor(private sidebarService: SidebarService) {
  }

  closeSidebar() {
    this.showSidebar = false;
  }

  ngOnInit() {
    this.sidebarService.changeSidebarState
      .takeUntil(this.ngUnsubscribe)
      .subscribe( () => this.showSidebar = !this.showSidebar);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
