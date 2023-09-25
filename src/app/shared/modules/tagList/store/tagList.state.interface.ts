import {Nullable} from 'src/app/shared/types/util.types';

export interface TagListStateInterface {
  isLoading: boolean;
  error: Nullable<string>;
  data: Array<string>;
}
