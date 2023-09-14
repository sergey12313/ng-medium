import type {Nullable} from './util.types';

export interface CurrentUserInterface {
  email: string;
  username: string;
  bio: Nullable<string>;
  image: string;
  token: string;
}
