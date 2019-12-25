import { Injectable, ElementRef } from '@angular/core';
import { Observable, fromEvent, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, map } from 'rxjs/operators';

import { LogService } from './log.service';
import { IAppInitService } from '../core.types';
import { headerHeight } from '../components/style.constants';
import {environment } from '../../../environments/environment';
import { PhotoAlbum } from '../models/photo-album.model';

export interface IContentScrollContext {
  scrollTop: number;
  clientHeight: number;
}
export interface IContentClickContext {
  x: number;
  y: number;
  event: any;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService implements IAppInitService {

  handleId = 'ContentService';
  private contentElementRef: ElementRef = null;

  scrollContextObservable: BehaviorSubject<IContentScrollContext>;
  private resizeEventObservable: Observable<IContentScrollContext>;
  private scrollEventObservable: Observable<IContentScrollContext>;
  private isScrollDetectionDisabled: boolean = false;

  clickContextObservable: BehaviorSubject<IContentClickContext>;
  private clickEventObservable: Observable<IContentClickContext>;

  photoAlbumsObservable: BehaviorSubject<PhotoAlbum[]>;

  constructor(
    private httpClient: HttpClient, 
    private logger: LogService,
  ) {
    this.scrollContextObservable = new BehaviorSubject({
      scrollTop: 0,
      clientHeight: window.innerHeight
    });
    this.clickContextObservable = new BehaviorSubject({
      x: 0,
      y: 0,
      event: null
    });
    this.setupPhotoAlbums();
  }

  setupPhotoAlbums() {
    this.photoAlbumsObservable = new BehaviorSubject([])
    this.httpClient.get(`${environment.assetBaseURL}/photo-albums.json`)
        .subscribe((data) => {
          this.photoAlbumsObservable.next(<PhotoAlbum[]> data)
          this.logger.log('ngOnInit()', this.handleId, { data });
        }, (err) => {
          this.photoAlbumsObservable.next([])
          this.logger.error('ngOnInit()', this.handleId, err);
      })
  }

  setContentElementRef(contentRef?: ElementRef) {
    if (contentRef) {
      this.contentElementRef = contentRef;
      this.initEventListeners();
    }
  }


  disableScrollDetection(): void {
    this.isScrollDetectionDisabled = true;
  }

  enableScrollDetection(): void {
    this.isScrollDetectionDisabled = false;
    // setTimeout(() => {
    //   this.scrollTick();
    // }, 500);
  }

  get artificialContentScrollUnderHeaderOffset(): number {
    return headerHeight;
  }

  scrollToTop() {
    this.logger.log('scrollToTop()', this.handleId, {});
    if (this.contentElementRef) this.contentElementRef.nativeElement.scrollTo(0, 0);
  }

  scrollSmoothToTop() {
    this.logger.log('scrollSmoothToTop()', this.handleId, {});
    if (this.contentElementRef) this.contentElementRef.nativeElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  scrollSmoothToBottom() {
    this.logger.log('scrollSmoothToBottom()', this.handleId, {});
    if (this.contentElementRef) {
      const contentWindow = this.contentElementRef.nativeElement;
      contentWindow.scrollTo({
        top: contentWindow.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  scrollTick(amountY?: number) {
    // scroll by XYZ px to trigger a scroll event
    this.logger.log('scrollTick()', this.handleId, {});
    const val = this.scrollContextObservable.value;
    val.scrollTop = val.scrollTop + amountY ? amountY : 0;
    this.scrollContextObservable.next(val);
  }

  triggerResize() {
    window.dispatchEvent(new Event('resize'));
  }

  private initEventListeners() {

    this.logger.log('initEventListeners()', this.handleId, {});

    // scroll event
    // bumps BehaviorSubject "this.scrollContextObservable.next(val)"
    this.scrollEventObservable = fromEvent(this.contentElementRef.nativeElement, 'scroll')
      // .pipe(debounceTime(0.001))
      .pipe(map((event: any): IContentScrollContext => {
        return {
          scrollTop: event.target.scrollTop,
          clientHeight: event.target.clientHeight
        };
      }));
    this.scrollEventObservable.subscribe((val: IContentScrollContext) => {
      // this.logger.log('SCROLL.next()', this.handleId, { val });
      if (!this.isScrollDetectionDisabled) this.scrollContextObservable.next(val);
    });

    // resize event
    // bumps BehaviorSubject "this.scrollContextObservable.next(val)"
    this.resizeEventObservable = fromEvent(window, 'resize')
      .pipe(debounceTime(3))
      .pipe(map((event: any): IContentScrollContext => {
        return this.scrollContextObservable.getValue();
      }));
    this.resizeEventObservable.subscribe((val: IContentScrollContext) => {
      this.logger.log('RESIZE.next()', this.handleId, { val });
      if (!this.isScrollDetectionDisabled) this.scrollContextObservable.next(val);
    });

    // click
    // bumps BehaviorSubject "this.clickContextObservable.next(val)"
    this.clickEventObservable = fromEvent(this.contentElementRef.nativeElement, 'click')
      .pipe(debounceTime(0.5))
      .pipe(map((event: any): IContentClickContext => {
        return {
          x: 0,
          y: 0,
          event
        };
      }));
    this.clickEventObservable.subscribe((val: IContentClickContext) => {
      this.logger.log('CLICK.next()', this.handleId, { val });
      this.clickContextObservable.next(val);
    });
  }

  appOnInit() {
    this.logger.log('appOnInit()', this.handleId, {});
    // setTimeout(() => {
    // this is now done by the content service passing in the main scrollable "interactive" elementRef
    //   this.initEventListeners();
    // }, 500);
  }
}
