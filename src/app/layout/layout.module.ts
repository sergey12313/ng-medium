import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TopBarComponent} from './components/topBar/topBar.component';
import {RouterModule} from '@angular/router';
import {NgIconsModule} from '@ng-icons/core';
import {matPostAdd, matSettings} from '@ng-icons/material-icons/baseline';

@NgModule({
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({matPostAdd, matSettings}),
  ],
})
export class LayoutModule {}
