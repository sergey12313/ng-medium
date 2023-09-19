import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from '@angular/router';
import {NgIconsModule} from '@ng-icons/core';
import {matPostAdd, matSettings} from '@ng-icons/material-icons/baseline';
import {TopBarComponent} from './components/topBar.component';
import {AvatarModule} from 'src/app/shared/modules/avatar/avatar.module';

@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  providers: [],
  imports: [
    CommonModule,
    AvatarModule,
    RouterModule,
    NgIconsModule.withIcons({matPostAdd, matSettings}),
  ],
})
export class TopBarModule {}
