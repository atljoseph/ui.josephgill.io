import { 
  Component, OnInit,
  Input, Output, EventEmitter,
  OnChanges, SimpleChanges,
  ChangeDetectionStrategy, ChangeDetectorRef,
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
} from './animated-flip-card.animation';

@Component({
  exportAs: 'flipFlopApi',
  selector: 'app-shared-animated-flip-card',
  templateUrl: './animated-flip-card.component.html',
  styleUrls: ['./animated-flip-card.component.scss'],
  animations: [
    FlipYAnimation,
    FadeOuterAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimatedFlipCardComponent implements OnInit, OnChanges {

  isLoaded: boolean = false;

  h: string;
  w: string;

  flipState: string = 'front';
  isFlipping: boolean;

  @ContentChild('frontTemplate') frontTemplate: TemplateRef<any>;
  @ContentChild('backTemplate') backTemplate: TemplateRef<any>;
  @ContentChild('flipBackTemplate') flipBackTemplate: TemplateRef<any>;

  @Input() height: number;
  @Input() width: number;
  @Input() flipOnHover: boolean = false;
  @Input() flipOnClick: boolean = false;
  @Input() animationSpeed: string = 'fast';
  @Input() isFlipped: false;

  @Output() flipDone = new EventEmitter<boolean>();
  @Output() flipStart = new EventEmitter<boolean>();

  @HostListener('window:resize') 
  resizeWindow(): void {
    const parent = this.elementRef.nativeElement.offsetParent;
    const { offsetHeight, offsetWidth } = parent;
    this.h = `${this.height ? this.height : offsetHeight}px`;
    this.w = `${this.width ? this.width : offsetWidth}px`;
    this.hostWidth = this.w;
    // this.logger.log('resizeWindow()', 'AnimationFlipCardComponent', { parent });
    this.isLoaded = true;
  }

  @HostBinding('style.width') hostWidth: string;

  constructor(
    private elementRef: ElementRef,
    private logger: LogService,
    private cdr: ChangeDetectorRef
  ) { }

  async reset() {
    setTimeout(() => {
      this.resizeWindow();
      this.cdr.markForCheck();
    }, 50);
  }

  ngOnInit() {
    this.reset();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.reset();
    // this.logger.log('changes', 'AnimatedFlipCardComponent', changes.isFlipped);
    if (changes.isFlipped && changes.isFlipped.currentValue !== changes.isFlipped.previousValue) {
      this.toggle();
    }

  }

  get isFrontShowing() {
    return this.flipState.includes('front');
  }

  async flipFront() {
    this.flipState = `front`;
    // this.flipState = `front-${this.animationSpeed}`;
    this.cdr.markForCheck();
  }

  async flipBack() {
    this.flipState = `back`;
    // this.flipState = `back-${this.animationSpeed}`;
    this.cdr.markForCheck();
  }

  async toggle() {
    this.isFrontShowing ? this.flipBack() : this.flipFront();
  }

  async onFlipDone() {
    if (this.isLoaded) {
      this.isFlipping = false;
      this.flipDone.emit(this.isFrontShowing);
    }
  }

  async onFlipStart() {
    if (this.isLoaded) {
      this.isFlipping = true;
      this.flipStart.emit(this.isFrontShowing);
    }
  }

}
