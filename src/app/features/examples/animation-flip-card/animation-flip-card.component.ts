import { 
  Component, OnInit,
  Input, Output, EventEmitter,
  // OnChanges, SimpleChanges,
  // ChangeDetectionStrategy, ChangeDetectorRef,
  TemplateRef, ElementRef, 
  ContentChild, 
  HostListener, 
  HostBinding, //Renderer
} from '@angular/core';

import { LogService } from '../../../core/services/log.service';

import { 
  FadeOuterAnimation,
  FlipYAnimation,
  fadeInnerAnimation
} from './animation-flip-card.animation';

@Component({
  exportAs: 'flipFlopApi',
  selector: 'app-animation-flip-card',
  templateUrl: './animation-flip-card.component.html',
  styleUrls: ['./animation-flip-card.component.scss'],
  animations: [
    FlipYAnimation,
    FadeOuterAnimation
  ]
})
export class AnimationFlipCardComponent implements OnInit {

  private isLoaded: boolean = false;

  h: string;
  w: string;

  flipState: string = 'front';
  isFlipping: boolean;

  @ContentChild('frontTemplate') frontTemplate: TemplateRef<any>;
  @ContentChild('backTemplate') backTemplate: TemplateRef<any>;

  @Input() height: number;
  @Input() width: number;
  @Input() flipOnHover: boolean = false;
  @Input() flipOnClick: boolean = false;

  @Output() flipDone = new EventEmitter<boolean>();
  @Output() flipStart = new EventEmitter<boolean>();

  @HostListener('window:resize') 
  resizeWindow(): void {
    const parent = this.elementRef.nativeElement.offsetParent;
    const { offsetHeight, offsetWidth } = parent;
    this.h = `${this.height ? this.height : offsetHeight}px`;
    this.w = `${this.width ? this.width : offsetWidth}px`;
    this.hostWidth = this.w;
    this.logger.log('resizeWindow()', 'AnimationFlipCardComponent', { parent });
    this.isLoaded = true;
  }

  @HostBinding('style.width') hostWidth: string;

  constructor(
    private elementRef: ElementRef,
    private logger: LogService,
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.resizeWindow();
    }, 50);
  }

  get isFrontShowing() {
    return this.flipState === 'front';
  }

  flipFront(): void {
    this.flipState = 'front';
  }

  flipBack(): void {
    this.flipState = 'back';
  }

  toggle() : void {
    this.isFrontShowing ? this.flipBack() : this.flipFront();
  }

  onFlipDone() {
    if (this.isLoaded) {
      this.isFlipping = false;
      this.flipDone.emit(this.isFrontShowing);
    }
  }

  onFlipStart() {
    if (this.isLoaded) {
      this.isFlipping = true;
      this.flipStart.emit(this.isFrontShowing);
    }
  }

}
