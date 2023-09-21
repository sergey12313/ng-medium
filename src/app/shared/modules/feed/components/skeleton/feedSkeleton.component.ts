import {Component, Input} from '@angular/core';

@Component({
  selector: 'mc-feed-skeleton',
  templateUrl: 'feedSkeleton.component.html',
})
export class FeedSkeletonComponent {
  @Input({alias: 'count', transform: (length: number) => Array.from({length})})
  countProps = Array.from({length: 1});
}
