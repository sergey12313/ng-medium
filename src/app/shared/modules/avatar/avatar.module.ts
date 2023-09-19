import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarComponent} from './components/avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  exports: [AvatarComponent],
  providers: [],
  imports: [CommonModule],
})
export class AvatarModule {}
