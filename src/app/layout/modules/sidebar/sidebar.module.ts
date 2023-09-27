import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './components/sidebar.component';
import {ClickOutsideDirective} from 'src/app/shared/directives/clickOutside.directive.ts';
import {RouterModule} from '@angular/router';
import {NgIconsModule} from '@ng-icons/core';
import {
  matPostAdd,
  matSettings,
  matMenu,
  matHome,
  matLogIn,
  matPersonAddAlt1,
} from '@ng-icons/material-icons/baseline';
import {AvatarModule} from 'src/app/shared/modules/avatar/avatar.module';

@NgModule({
  declarations: [SidebarComponent, ClickOutsideDirective],
  exports: [SidebarComponent],
  providers: [],
  imports: [
    CommonModule,
    AvatarModule,
    RouterModule,
    NgIconsModule.withIcons({
      matPostAdd,
      matSettings,
      matMenu,
      matHome,
      matPersonAddAlt1,
      matLogIn,
    }),
  ],
})
export class SidebarModule {}
