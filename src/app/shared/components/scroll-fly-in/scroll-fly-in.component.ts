
import { Component, OnInit, AfterViewInit, Input, ElementRef, EventEmitter, Output, TemplateRef, ContentChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

import { LogService } from '../../../core/services/log.service';
import { ContentService, IContentScrollContext } from '../../../core/services/content.service';
import { scrollAnimation } from './scroll-fly-in.animation';

@Component({
  selector: 'app-shared-scroll-fly-in',
  templateUrl: './scroll-fly-in.component.html',
  styleUrls: ['./scroll-fly-in.component.scss'],
  animations: [scrollAnimation]
})
export class ScrollFlyInComponent implements OnInit, AfterViewInit {

  @Input() src: string;
  // @Input() isInitiallyVisible: boolean = false;
  @Input() scrollHideType: string = 'vertical-horizontal-scaled'; // default, vertical, horizontal, vertical-horizontal-scaled
  @Input() loadHeightThresholdFactor: number = 40; // about 10 pixels per image initial load

  animationState = 'show';
  // animationState = 'hideLeft';
  private scrollEvent: any;

  animationStates = {
    'default': {
      scrollup: 'hide',
      scrolldown: 'hide'
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

  @ContentChild(TemplateRef) contentTemplate;
  shouldLoad: boolean = false;
  placeholderHeight: number = 300;

  constructor(
    public el: ElementRef,
    private logger: LogService,
    private content: ContentService
  ) {
  }

  setScrollAnimationShowState(): void {
    this.animationState = 'show';
  }

  setScrollAnimationHideState(direction: string): void {
    this.animationState = this.animationStates[this.scrollHideType][direction.toLowerCase()];
  }

  ngAfterViewInit() {
    // console.log('hey');
  }

  ngOnInit() {
    // this.content.scrollTick();
    // this.logger.log('ngOnInit()', 'ScrollFlyInComponent', { scroll: this.scroll });
    // if (this.isInitiallyVisible) this.setScrollAnimationShowState();

    this.content.scrollContextObservable.subscribe((scrollContext: IContentScrollContext) => {
      const componentHeight = this.el.nativeElement.offsetHeight;
      const componentTop = this.el.nativeElement.offsetTop;
      const componentBottom = componentTop + componentHeight;
      const contentTopBorder = scrollContext.scrollTop;
      const contentBottomBorder = scrollContext.scrollTop + scrollContext.clientHeight;
      const varianceHideTop = 50;
      const varianceHideBottom = 50;
      // const varianceShow = 50;
      // const varianceHide = scrollContext.clientHeight * 0.15;
      // const varianceShow = scrollContext.clientHeight * 0.075;
      // this.logger.log(`scrollContextObservable.subscribe()`, 'ScrollFlyInComponent', { });

      if (scrollContext.scrollTop === 0
        && componentBottom >= contentTopBorder
        && componentTop <= contentBottomBorder
      ) {
        // this.logger.log(`scrollContextObservable.subscribe() init show items in contentWindow`, 'ScrollFlyInComponent', { });
        this.setScrollAnimationShowState();
      }
      else if (componentTop > contentBottomBorder - varianceHideBottom) {
        // this.logger.log(`scrollContextObservable.subscribe() hide scrollup`, 'ScrollFlyInComponent', { });
        this.setScrollAnimationHideState('scrollup');
        // this.animationState = 'hideBottom';
        // this.animationState = 'hideLeft';
      }
      else if (componentBottom < contentTopBorder + varianceHideTop) {
        // this.logger.log(`scrollContextObservable.subscribe() hide scrolldown`, 'ScrollFlyInComponent', { });
        this.setScrollAnimationHideState('scrolldown');
        // this.animationState = 'hideTop';
        // this.animationState = 'hideRight';
      }
      else {
        // this.logger.log(`scrollContextObservable.subscribe() show`, 'ScrollFlyInComponent', { });
        this.setScrollAnimationShowState();
        // this.animationState = 'show';
      }

      // const initialHeightLoadThreshold = this.placeholderHeight / 3;
      // const initialHeightLoadThreshold = 51;
      const initialHeightLoadThreshold = this.content.artificialContentScrollUnderHeaderOffset + this.loadHeightThresholdFactor;
      if ((scrollContext.scrollTop === 0 && componentTop < initialHeightLoadThreshold) || scrollContext.scrollTop !== 0) {
        const viewportFactor = 2;
        if (componentTop < contentBottomBorder + scrollContext.clientHeight * viewportFactor) {
          // console.log({ componentBottom, componentTop, contentTopBorder, contentBottomBorder });
          this.shouldLoad = true;
        }
      }
    });
  }
}
