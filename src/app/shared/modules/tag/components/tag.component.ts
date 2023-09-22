import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'mc-tag',
  templateUrl: 'tag.component.html',
  styleUrls: ['tag.component.scss'],
})
export class TagComponent {
  @Input({alias: 'tag', required: true}) tagProps!: string;
  @Input({alias: 'link'}) linkProps?: RouterLink;
  @Input({alias: 'variant'}) variantProps?: 'solid' | 'ghost' = 'ghost';
}
