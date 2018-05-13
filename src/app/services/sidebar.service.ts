import { Subject } from 'rxjs/Subject';

export class SidebarService {
  public changeSidebarState = new Subject();

  onToggle(): void {
    this.changeSidebarState.next();
  }
}
