import { Component, Injectable, OnInit, HostListener, ElementRef } from '@angular/core';
import { Observable, fromEvent, from, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { LogService } from './log.service';
import { IAppInitService } from '../core.types';

export interface IContentScrollContext {
  scrollTop: number;
  clientHeight: number;
}

@Injectable({
  providedIn: 'root'
})
export class ScrollService implements IAppInitService {

  private scrollEventObservable: Observable<IContentScrollContext>;
  scrollContextObservable: BehaviorSubject<IContentScrollContext>;

  constructor(
    private logger: LogService,
  ) {

    this.scrollContextObservable = new BehaviorSubject({
      scrollTop: 0,
      clientHeight: window.innerHeight
    });
   }

   getScrollableHTMLElement() {
    return document.getElementById('scroll-content');
   }

   scrollToTop() {
     // scroll by 1 px to trigger a scroll event
    this.logger.log('scrollToTop()', 'ScrollService', { });
    this.getScrollableHTMLElement().scrollTo(0,0);
   }

   scrollSmoothToTop() {
    this.logger.log('scrollSmoothToTop()', 'ScrollService', { });
    this.getScrollableHTMLElement().scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
   }

   scrollSmoothToBottom() {
    this.logger.log('scrollSmoothToBottom()', 'ScrollService', { });
    const contentWindow = this.getScrollableHTMLElement();
    contentWindow.scrollTo({
      top: contentWindow.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
   }

   scrollTick() {
    this.logger.log('scrollTick()', 'ScrollService', { });
    this.scrollContextObservable.next(this.scrollContextObservable.value);
   }

   appOnInit() {

    this.logger.log('appOnInit()', 'ScrollService', {  });
    setTimeout(() => {
       //create observable that emits click events
       // const source = fromEvent(window, 'scroll');
       // const source = fromEvent(document, 'scroll');
       const source = fromEvent(this.getScrollableHTMLElement(), 'scroll');
       //map to string with given event timestamp
       this.scrollEventObservable = source.pipe(map((event: any): IContentScrollContext => {
        return {
          scrollTop: event.target.scrollTop,
          clientHeight: event.target.clientHeight
        };
       }));
       //output (example): 'Event time: 7276.390000000001'
       const subscribe = this.scrollEventObservable.subscribe((val: IContentScrollContext) => this.scrollContextObservable.next(val));
     }, 500);


     //
     //
     // this.logger.log('appOnInit()', 'ScrollService', { });
     // this.scrollEvent = fromEvent(document.getElementById('content'), 'scroll');
     // this.logger.log('appOnInit()', 'ScrollService', { scrollEvent: this.scrollEvent });
     // this.scrollEvent.subscribe((e: UIEvent) => {
     //   this.logger.log('fromEvent()', 'ScrollService', { e });
     // });
     // // this.scrollEvent.subscribe((e: UIEvent) => {
     //   this.logger.log('fromEvent()', 'ScrollService', { e });
     // });
   }
}
