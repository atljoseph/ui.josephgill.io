import { Injectable } from '@angular/core';

import { LogService } from '../../../core/services/log.service';
import { ContentService, IContentScrollContext } from '../../../core/services/content.service';

import { ScrollFlyInComponent } from './scroll-fly-in.component';

@Injectable({
  providedIn: 'root'
})
export class ScrollFlyInService {

  private children: ScrollFlyInComponent[] = [];
  private traceId: string = 'ScrollFlyInService';
  private viewportFactor: number = 2;
  private scrollContext: IContentScrollContext;
  private scrollVariance: number = -50;

  constructor(
    private logger: LogService,
    private content: ContentService,
  ) {
    this.content.scrollContextObservable.subscribe((scrollContext) => {
      // this method is async: DO NOT await :)
      this.scrollContext = scrollContext;
      this.onScroll();
    });
  }

  async register(child: ScrollFlyInComponent) {
    this.children.push(child);
  }

  async unregister(flyInHandleId: string) {
    const index = this.children.findIndex((val, idx) => {
      return val.flyInHandleId === flyInHandleId;
    });
    if (index) {
      this.children.splice(index, 1)
    }
  }

  async onScrollChild(child: ScrollFlyInComponent) {
    // don't mess with this, as it is fine tuned and getting finer ...

    // #####################
    // if the scroll-fly-in omponent has NOT YET LOADED
    // this means the content might be further than a page or two below the currently viewed page
    // #####################
    if (!child.hasLoaded) {
      if (this.contentTopBorder === 0) {
        if (this.isLoadable(child)) {
          // load and make visible
          child.setContentShouldLoad(true);
          child.setScrollAnimationShowState();
        }
      }
      else { // scrollTop > 0
        // load
        if (this.isLoadable(child)) {
          child.setContentShouldLoad();
        }
        
      }
    }
    // #####################
    // if the scroll-fly-in omponent has ALEADY LOADED
    // this means the content might be less than page or two below the currently viewed page OR above current page
    // #####################
    // if (child.hasLoaded) { 
    else {
      if (this.isShowable(child)) {
        // it was important to check this condition first (logic worked better)
        if (!child.isVisible) child.setScrollAnimationShowState();
      }
      else {
        if (child.top > this.contentBottomBorder) {//} - varianceHideBottom) {
          if (child.isVisible) child.setScrollAnimationHideState('scrollup');
        }
        else if (child.bottom < this.contentTopBorder) {// + varianceHideTop) {
          if (child.isVisible) child.setScrollAnimationHideState('scrolldown');
        }
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
    // console.log(child, this.contentBottomBorder, this.contentViewHeight, this.contentBottomBorder + this.contentViewHeight * this.viewportFactor);
    return child.top < this.contentBottomBorder + this.contentViewHeight * this.viewportFactor;
  }

  isShowable(child: ScrollFlyInComponent): boolean {
    return child.top <= this.contentBottomBorder && child.bottom >= this.contentTopBorder;
  }

  async onScroll() {
    this.logger.log('onScroll()', this.traceId, {});
    // better performance than .forEach() or .map()
    for (let child of this.children) {
      // this method is async: DO NOT await :)
      this.onScrollChild(child);
    }
  }
}
