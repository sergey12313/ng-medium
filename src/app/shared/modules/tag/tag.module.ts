import {CommonModule} from '@angular/common';
import {TagComponent} from './components/tag.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TagComponent],
  exports: [TagComponent],
})
export class TagModule {}
