import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {Nullable} from 'src/app/shared/types/util.types';

export interface AuthStateInterface {
  isSubmitting: boolean;
  currentUser: Nullable<CurrentUserInterface>;
  isLoggedIn: Nullable<boolean>;
  validationErrors: Nullable<BackendErrorsInterface>;
}
