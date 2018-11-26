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

  onScroll(scrollContext: IContentScrollContext) {
    // this.logger.log('onScroll()', this.traceId, { scrollContext });

    const varianceHideTop = this.content.artificialContentScrollUnderHeaderOffset;
    const varianceHideBottom = 50;

    this.children.forEach((val, idx) => {
      const contentTopBorder = scrollContext.scrollTop;
      const contentBottomBorder = scrollContext.scrollTop + scrollContext.clientHeight;

      // other info later
      if (!val.shouldContentLoad) {

        const viewportFactor = 1;

        if (scrollContext.scrollTop !== 0) {
          if (val.top < contentBottomBorder + scrollContext.clientHeight * viewportFactor) {
            // console.log({ componentBottom, componentTop, contentTopBorder, contentBottomBorder });
            val.setContentShouldLoad();
            // setTimeout(() => {
            // }, 500);
          }
        }
        else {
          const loadables = this.children.filter((val, idx) => {
            return val.top < contentBottomBorder + scrollContext.clientHeight * viewportFactor
          });
          this.logger.log('loadables', this.traceId, { loadables });
          loadables.forEach((val, idx) => {
            // setTimeout(() => {
              val.setContentShouldLoad(true);
              val.setScrollAnimationShowState(true);
              val.markForChangeDetection(); 
            // }, 500);
            
          });
        }
      }
      else {
        if (
          scrollContext.scrollTop === 0
          // && val.bottom >= contentTopBorder
          // && val.top <= contentBottomBorder
        ) {
          val.setScrollAnimationShowState();
        }
        else if (val.top > contentBottomBorder - varianceHideBottom) {
          val.setScrollAnimationHideState('scrollup');
        }
        else if (val.bottom < contentTopBorder + varianceHideTop) {
          val.setScrollAnimationHideState('scrolldown');
        }
        else {
          val.setScrollAnimationShowState();
        }
      }

    });
  }
}
