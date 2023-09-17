import {Component, Input} from '@angular/core';
import {BackendErrorsInterface} from '../../types/backendErrors.interface';
import {Nullable} from '../../types/util.types';

@Component({
  templateUrl: './backendErrorMessages.component.html',
  selector: 'mc-backend-error-messages',
})
export class BackendErrorMessageComponent {
  @Input({alias: 'errors'})
  backendErrorsProps!: Nullable<BackendErrorsInterface>;

  get errors(): Array<string> {
    return this.backendErrorsProps
      ? Object.entries(this.backendErrorsProps).map(([key, value]) => {
          return `${key} ${value.join(', ')}`;
        })
      : [];
  }
}
