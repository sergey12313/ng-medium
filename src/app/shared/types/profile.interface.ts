import {Nullable} from './util.types';

export interface ProfileInterface {
  username: string;
  bio: Nullable<string>;
  image: string;
  following: boolean;
}
