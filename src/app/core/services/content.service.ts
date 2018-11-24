import { Component, Injectable, OnInit, HostListener, ElementRef } from '@angular/core';
import { Observable, fromEvent, from, BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { map } from 'rxjs/operators';
// import * as moment from 'moment';

import { LogService } from './log.service';
import { IAppInitService } from '../core.types';
import { headerHeight } from '../components/style.constants';

export interface IContentScrollContext {
  scrollTop: number;
  clientHeight: number;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService implements IAppInitService {

  handleId = 'ContentService';

  private resizeEventObservable: Observable<IContentScrollContext>;
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

   get artificialContentScrollUnderHeaderOffset(): number {
     return headerHeight;
   }

   get scrollableHTMLElement(): HTMLElement {
    return document.getElementById('scroll-content');
   }

   scrollToTop(callback?: Function) {
     // scroll by 1 px to trigger a scroll event
    this.logger.log('scrollToTop()', this.handleId, { });
    // console.log('this', moment().toString());
    this.scrollableHTMLElement.scrollTo(0,0);
    // console.log('is syncronous', moment().toString());
    // window.scrollTo(0,0);
    // this.scrollableHTMLElement.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
    if (callback) callback();
   }

   scrollSmoothToTop(callback?: Function) {
    this.logger.log('scrollSmoothToTop()', this.handleId, { });
    this.scrollableHTMLElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    if (callback) callback();
   }

   scrollSmoothToBottom() {
    this.logger.log('scrollSmoothToBottom()', this.handleId, { });
    const contentWindow = this.scrollableHTMLElement;
    contentWindow.scrollTo({
      top: contentWindow.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
   }

   scrollTick() {
    this.logger.log('scrollTick()', this.handleId, { });
    const val = this.scrollContextObservable.value;
    val.scrollTop = val.clientHeight + 1;
    this.scrollContextObservable.next(val);
   }

   triggerResize() {
    window.dispatchEvent(new Event('resize'));
   }

   appOnInit() {

    this.logger.log('appOnInit()', this.handleId, {  });
    setTimeout(() => {
       // scroll event
       this.scrollEventObservable = fromEvent(this.scrollableHTMLElement, 'scroll')
       .pipe(debounceTime(0.1))
       .pipe(map((event: any): IContentScrollContext => {
        return {
          scrollTop: event.target.scrollTop,
          clientHeight: event.target.clientHeight
        };
       }));
       this.scrollEventObservable.subscribe((val: IContentScrollContext) => {
        // this.logger.log('scroll', this.handleId, { val });
        this.scrollContextObservable.next(val);
       });

       // resize event
       // change context?
       this.resizeEventObservable = fromEvent(window, 'resize')
        .pipe(debounceTime(0.1))
        .pipe(map((event: any): IContentScrollContext => {
        return {
          scrollTop: event.target.scrollTop,
          clientHeight: event.target.clientHeight
        };
       }));
       this.resizeEventObservable.subscribe((val: IContentScrollContext) => {
        // this.logger.log('resize', this.handleId, { val });
        this.scrollContextObservable.next(val);
       });

     }, 500);

    }
}
