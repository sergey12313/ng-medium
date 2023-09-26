import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './tagFeed.component.html',
  styleUrls: ['./tagFeed.component.scss'],
})
export class TagFeedComponent implements OnInit {
  tagName$!: Observable<string>;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.tagName$ = this.route.params.pipe(map((params) => params['slug']));
  }
}
