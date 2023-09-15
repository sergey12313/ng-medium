import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {BackendErrorMessageComponent} from './backendErrorMessages.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BackendErrorMessageComponent],
  exports: [BackendErrorMessageComponent],
})
export class BackendErrorMessageModule {}
