import { Injectable } from '@angular/core';

import { LogService } from '../../../core/services/log.service';
import { ContentService, IContentScrollContext } from '../../../core/services/content.service';

import { ScrollFlyInComponent } from './scroll-fly-in.component';

@Injectable({
  providedIn: 'root'
})
export class ScrollFlyInService {

  children: ScrollFlyInComponent[] = [];
  traceId: string = 'ScrollFlyInService';
  viewportFactor: number = 1.75;
  scrollContext: IContentScrollContext;

  constructor(
    private logger: LogService,
    private content: ContentService,
  ) {
    this.content.scrollContextObservable.subscribe((scrollContext) => {
      this.onScroll(scrollContext);
    });
  }

  register(child: ScrollFlyInComponent) {
    this.children.push(child);
  }

  unregister(flyInHandleId: string) {
    const index = this.children.findIndex((val, idx) => {
      return val.flyInHandleId === flyInHandleId;
    });
    if (index) {
      this.children.splice(index, 1)
    }
  }

  async onScrollChild(child: ScrollFlyInComponent) {
    // don't mess with this, as it is fine tuned...

    // #####################
    // if the scroll-fly-in omponent has NOT YET LOADED
    // this means the content might be further than a page or two below the currently viewed page
    // #####################
    if (!child.hasLoaded) {
      if (this.contentTopBorder !== 0) {
        if (this.isLoadable(child)) {
          child.setContentShouldLoad();
          // setTimeout(() => {
          // }, 500);
        }
      }
      else { // scrollTop === 0
        if (this.isLoadable(child)) {
          // setTimeout(() => {
          child.setContentShouldLoad(true);
          child.setScrollAnimationShowState(true);
          child.markForChangeDetection();
          // }, 500);
        }
      }
    }
    // #####################
    // if the scroll-fly-in omponent has ALEADY LOADED
    // this means the content might be less than page or two below the currently viewed page OR above current page
    // #####################
    else {
      if (
        this.contentTopBorder === 0
        // && val.bottom >= contentTopBorder
        // && val.top <= contentBottomBorder
      ) {
        child.setScrollAnimationShowState();
      }
      else if (child.top > this.contentBottomBorder) {//} - varianceHideBottom) {
        child.setScrollAnimationHideState('scrollup');
      }
      else if (child.bottom < this.contentTopBorder) {// + varianceHideTop) {
        child.setScrollAnimationHideState('scrolldown');
      }
      else {
        child.setScrollAnimationShowState();
      }
    }
  }

  get contentBottomBorder(): number {
    return this.scrollContext.scrollTop + this.scrollContext.clientHeight;
  }

  get contentTopBorder(): number {
    return this.scrollContext.scrollTop;
  }

  get contentViewHeight(): number {
    return this.scrollContext.clientHeight;
  }

  isLoadable(child: ScrollFlyInComponent): boolean {
    return child.top < this.contentBottomBorder + this.contentViewHeight * this.viewportFactor;
  }

  onScroll(scrollContext: IContentScrollContext) {
    this.scrollContext = scrollContext;
    // this.logger.log('onScroll()', this.traceId, { scrollContext });

    // better performance than .forEach() or .map()
    for (let child of this.children) {
      // this method is async: DO NOT await :)
      this.onScrollChild(child);
    }
  }
}
