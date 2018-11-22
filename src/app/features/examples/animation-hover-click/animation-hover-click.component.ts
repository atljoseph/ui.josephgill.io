import { Component, OnInit } from '@angular/core';

import { LogService } from '../../../core/services/log.service';
import { SoundService } from '../../../core/services/sound.service';

import { HoverAnimation } from './animation-hover-click.animation';

@Component({
  selector: 'app-animation-hover-click',
  templateUrl: './animation-hover-click.component.html',
  styleUrls: ['./animation-hover-click.component.scss'],
  animations: [HoverAnimation]
})
export class AnimationHoverClickComponent implements OnInit {

  isVisible: boolean;
  isHover: boolean;
  animationState: string = 'nohover';

  constructor(
    private logger: LogService,
    private sound: SoundService
  ) { }

  ngOnInit() {
  }

  hover(isHovered: boolean): void {
    this.isHover = isHovered;
    this.animationState = isHovered ? 'hover' : 'nohover';
    this.logger.log('animate hover()', 'HoverComponent', { isHovered, animationState: this.animationState });
  }

  click(): void {
    this.animationState = 'click';
    this.logger.log('animate click()', 'HoverComponent', { animationState: this.animationState });
  }

  onAnimationDone(animationEvent: any): void {
    this.logger.log('onAnimationDone()', 'HoverComponent', { animationState: this.animationState, animationEvent });
    if (animationEvent.toState == 'click') {
      this.hover(this.isHover);
    }
  }

  onAnimationStart(animationEvent: any): void {
    if (animationEvent.toState == 'click') {
      this.sound.play('neck-snap.mp3', 0.1);
    }
  }

}
