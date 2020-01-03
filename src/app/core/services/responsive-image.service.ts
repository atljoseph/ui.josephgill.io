import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LogService } from './log.service';
import { PhotoAlbum } from '../models/photo-album.model';
import { BehaviorSubject } from 'rxjs';
import { IAboutGroup } from '../models/about.types';
import { ICodeArticle } from '../models/code.types';
import { CodeArticle } from '../models/code.model';
import { IPhotoAlbum } from '../models/photo-albums.types';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveImageService {

  handleId = 'ResponsiveImageService';
  photoAlbumsObservable: BehaviorSubject<PhotoAlbum[]> = new BehaviorSubject([]);
  aboutDataObservable: BehaviorSubject<IAboutGroup[]> = new BehaviorSubject([]);
  codeArticlesObservable: BehaviorSubject<CodeArticle[]> = new BehaviorSubject([]);

  constructor(
    private httpClient: HttpClient,
    private logger: LogService,
  ) {

  }
  // ##############################

  getPhotoAlbums(cb?: Function) {
    if (this.photoAlbumsObservable.value.length === 0) {
      this.httpClient.get(`${environment.assetBaseURL}/photo-albums.json?_cache_buster=${new Date().getTime()}`)
        .subscribe((data) => {
          this.photoAlbumsObservable.next((<IPhotoAlbum[]>data).map(pa => new PhotoAlbum(pa)))
          this.logger.log('setupPhotoAlbums()', this.handleId, { data });
          if (cb) cb();
        }, (err) => {
          this.photoAlbumsObservable.next([])
          this.logger.error('setupPhotoAlbums()', this.handleId, err);
        })
    } else {
      this.photoAlbumsObservable.next(this.photoAlbumsObservable.value)
      if (cb) cb();
    }
  }

  getAboutData(cb?: Function) {
    if (this.aboutDataObservable.value.length === 0) {
      this.httpClient.get(`${environment.assetBaseURL}/about.json?_cache_buster=${new Date().getTime()}`)
        .subscribe((data) => {
          this.aboutDataObservable.next(<IAboutGroup[]>data)
          this.logger.log('setupAboutData()', this.handleId, { data });
          if (cb) cb();
        }, (err) => {
          this.aboutDataObservable.next([])
          this.logger.error('setupAboutData()', this.handleId, err);
        })
    } else {
      this.aboutDataObservable.next(this.aboutDataObservable.value)
      if (cb) cb();
    }
  }

  getCodeArticles(cb?: Function) {
    if (this.codeArticlesObservable.value.length === 0) {
      this.httpClient.get(`${environment.assetBaseURL}/code-articles.json?_cache_buster=${new Date().getTime()}`)
        .subscribe((data) => {
          this.codeArticlesObservable.next((<ICodeArticle[]>data).map(ca => new CodeArticle(ca)))
          this.logger.log('setupCodeArticles()', this.handleId, { data });
          if (cb) cb();
        }, (err) => {
          this.codeArticlesObservable.next([])
          this.logger.error('setupCodeArticles()', this.handleId, err);
        })
      } else {
        this.codeArticlesObservable.next(this.codeArticlesObservable.value)
        if (cb) cb();
      }
    }

    assetURL() {
      let url = environment.assetBaseURL
      const processingPath = environment.assetProcessedPath
      if (url && url.length && processingPath && processingPath.length) {
        url = `${url}/${processingPath}`
      }
      return url
    }

    // ##############################

    responsiveTestSrcs: string[] = [
      'candler-and-ngan.jpg',
      'candler-umbrella-deer.jpg',
      'brownie-monster.jpg',
      'candler-trains-on-floor.jpg',
      'candler-cracker-barrel.jpg',
      'candler-glasses-laughing.jpg',
    ];
    imgSrcSetTest = (src: string): string => {
      // test responsive image
      const srcs: string[] = this.responsiveSizes.map((size, index) => {
        const imgSrc = this.responsiveTestSrcs[index];
        return `${this.assetURL()}/${this.responsiveSizeFallback}/${imgSrc} ${size}w`;
      });
      return srcs.join(',');
    }
    imgSrcTest(src: string): string {
      // test fallback image
      return `${this.assetURL()}/${this.responsiveSizeFallback}/${this.responsiveTestSrcs[0]}`;
    }

    // ##############################

    responsiveSizes: number[] = [640, 768, 1024];//, 1366];//, 1600, 1920];
    responsiveSizeFallback: number = 640;
    imgSrcSet = (src: string): string => {
      // responsive image
      const srcs: string[] = this.responsiveSizes.map(size => {
        return `${this.assetURL()}/${size}/${src} ${size}w`;
      });
      return srcs.join(',');
    }
    imgSrc(src: string): string {
      // fallback image
      return `${this.assetURL()}/${this.responsiveSizeFallback}/${src}`;
    }
  }
