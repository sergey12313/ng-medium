import {Component, Input} from '@angular/core';
import {Nullable} from 'src/app/shared/types/util.types';

@Component({
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
  selector: 'mc-avatar',
})
export class AvatarComponent {
  @Input({alias: 'imageUrl'}) imageUrlProps: string = 'assets/i.webp';
  @Input({alias: 'size'}) sizeProps: 'sm' | 'md' | 'lg' = 'sm';

  get sizeClass() {
    switch (this.sizeProps) {
      case 'md': {
        return 'w-8 h-8';
      }
      case 'lg': {
        return 'w-[100px] h-[100px]';
      }
      default: {
        return 'w-6 h-6';
      }
    }
  }
}
