import {Injectable} from '@angular/core';

@Injectable()
export class SidebarService {
  isOpened = true;

  toggle() {
    setTimeout(() => {
      this.isOpened = !this.isOpened;
    }, 0);
  }
  open() {
    setTimeout(() => {
      this.isOpened = true;
    }, 0);
  }
  close() {
    setTimeout(() => {
      this.isOpened = false;
    }, 0);
  }
}
