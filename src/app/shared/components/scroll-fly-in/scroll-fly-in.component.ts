
import { Component, OnDestroy, OnInit, AfterViewInit, AfterContentInit, Input, ElementRef, ViewChild, TemplateRef, ContentChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

import { LogService } from '../../../core/services/log.service';
import { UuidService } from '../../../core/services/uuid.service';

import { ScrollFlyInService } from './scroll-fly-in.service';
import { scrollAnimation } from './scroll-fly-in.animation';

@Component({
  selector: 'app-shared-scroll-fly-in',
  templateUrl: './scroll-fly-in.component.html',
  styleUrls: ['./scroll-fly-in.component.scss'],
  animations: [scrollAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollFlyInComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy {

  animationStates = {
    'default': {
      // scrollup: 'hide',
      // scrolldown: 'hide'
      scrollup: 'hideBottomLeft',
      scrolldown: 'hideTopRight'
    },
    'vertical': {
      scrollup: 'hideBottom',
      scrolldown: 'hideTop'
    },
    'horizontal': {
      scrollup: 'hideLeft',
      scrolldown: 'hideRight'
    },
    'vertical-horizontal-scaled': {
      scrollup: 'hideBottomLeft',
      scrolldown: 'hideTopRight'
    }
  };

  @Input() src: string;
  // @Input() isInitiallyVisible: boolean = false;
  @Input() scrollHideType: string = 'vertical-horizontal-scaled'; // default, vertical, horizontal, vertical-horizontal-scaled
  @Input() loadHeightThresholdFactor: number = 40; // about 10 pixels per image initial load
  @Input() showPlaceholder: boolean = true;

  @ContentChild(TemplateRef) contentTemplate;
  @ViewChild('placeholder') placeholder: ElementRef;

  shouldLoad: boolean = false;
  placeholderSize: number = 250;
  isLoaded: boolean = false;
  flyInHandleId: string;
  animationStatePlaceholder = 'showPlaceholder';
  animationState = 'show';

  constructor(
    public el: ElementRef,
    private cdr: ChangeDetectorRef,
    private logger: LogService,
    private uuid: UuidService,
    public service: ScrollFlyInService
  ) {
    this.flyInHandleId = this.uuid.uuidv4();
  }

  markForChangeDetection() {
    this.cdr.markForCheck();
  }

  get isVisible() {
    return this.animationState === 'show';
  }

  setScrollAnimationShowState(ignoreChanges?: boolean): void {
    // this.logger.log(`SHOW`, 'ScrollFlyInComponent', { contentTemplate: this.contentTemplate.elementRef.nativeElement });
    this.animationState = 'show';
    // this.animationStatePlaceholder = this.animationStates[this.scrollHideType].scrolldown;
    if (!ignoreChanges) this.markForChangeDetection();
  }

  setScrollAnimationHideState(direction: string, ignoreChanges?: boolean): void {
    // this.logger.log(`HIDE ${direction}`, 'ScrollFlyInComponent', { contentTemplate: this.contentTemplate.elementRef.nativeElement });
    this.animationState = this.animationStates[this.scrollHideType][direction.toLowerCase()];
    if (!ignoreChanges) this.markForChangeDetection(); 
  }

  setContentShouldLoad(ignoreChanges?: boolean): void {
    // this.logger.log(`SHOULD LOAD`, 'ScrollFlyInComponent', { contentTemplate: this.contentTemplate.elementRef.nativeElement });
    this.shouldLoad = true;
    if (!ignoreChanges) this.markForChangeDetection();
  }

  // setShowPlaceholder(): void {
  //   this.logger.log(`SHOW PLACEHOLDER`, 'ScrollFlyInComponent', { contentTemplate: this.contentTemplate.elementRef.nativeElement });
  //   this.isPlaceholderVisible = true;
  //   this.cdr.markForCheck();
  // }

  get hasLoaded(): boolean {
    return this.shouldLoad;
  }

  get height() {
    return this.el.nativeElement.offsetHeight;
  }

  get top() {
    return this.el.nativeElement.offsetTop;
  }

  get bottom() {
    return this.top + this.height;
  }

  onAnimationDone(animationEvent: any) {
    if (animationEvent.toState == 'show') {
      // this.placeholder.nativeElement.style.transition = 'all .3s ease-in-out';
      this.placeholder.nativeElement.style.display = 'none';
      this.cdr.markForCheck();
    }
  }

  ngAfterViewInit() {
    // this.logger.log('ngAfterViewInit', 'ScrollFlyInComponent', this.src);
  }

  ngOnInit() {
    this.service.register(this);
    // this.logger.log('ngOnInit', 'ScrollFlyInComponent', this.src);
  }

  ngOnDestroy() {
    this.service.unregister(this.flyInHandleId);
    // this.content.scrollContextObservable.unsubscribe();
  }

  ngAfterContentInit() {
    // this.logger.log('ngAfterContentInit', 'ScrollFlyInComponent', this.src);
  }
}
