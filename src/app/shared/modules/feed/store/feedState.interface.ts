import {Nullable} from 'src/app/shared/types/util.types';
import {FeedResponseInterface} from '../types/feedResponse.Interface';

export interface FeedStateInterface {
  isLoading: boolean;
  error: Nullable<string>;
  data: Nullable<FeedResponseInterface>;
}
