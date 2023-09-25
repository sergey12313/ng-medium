import {AuthStateInterface} from 'src/app/auth/types/authState.interface';
import {FeedStateInterface} from '../modules/feed/store/feedState.interface';
import {TagListStateInterface} from '../modules/tagList/store/tagList.state.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: TagListStateInterface;
}
