import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LogService } from './log.service';
import { PhotoAlbum } from '../models/photo-album.model';
import { BehaviorSubject } from 'rxjs';
import { IAboutGroup } from '../models/about.types';
import { ICodeArticle } from '../models/code.types';
import { CodeArticle } from '../models/code.model';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveImageService {

  handleId = 'ResponsiveImageService';
  photoAlbumsObservable: BehaviorSubject<PhotoAlbum[]>;
  aboutDataObservable: BehaviorSubject<IAboutGroup[]>;
  codeArticlesObservable: BehaviorSubject<CodeArticle[]>;

  constructor(
    private httpClient: HttpClient, 
    private logger: LogService,
  ) {
    this.setupPhotoAlbums();
    this.setupAboutData();
    this.setupCodeArticles();
  }
  // ##############################

  setupPhotoAlbums() {
    this.photoAlbumsObservable = new BehaviorSubject([])
    this.httpClient.get(`${environment.assetBaseURL}/photo-albums.json`)
        .subscribe((data) => {
          this.photoAlbumsObservable.next(<PhotoAlbum[]> data)
          this.logger.log('setupPhotoAlbums()', this.handleId, { data });
        }, (err) => {
          this.photoAlbumsObservable.next([])
          this.logger.error('setupPhotoAlbums()', this.handleId, err);
      })
  }

  setupAboutData() {
    this.aboutDataObservable = new BehaviorSubject([])
    this.httpClient.get(`${environment.assetBaseURL}/about.json`)
        .subscribe((data) => {
          this.aboutDataObservable.next(<IAboutGroup[]> data)
          this.logger.log('setupAboutData()', this.handleId, { data });
        }, (err) => {
          this.aboutDataObservable.next([])
          this.logger.error('setupAboutData()', this.handleId, err);
      })
  }

  setupCodeArticles() {
    this.codeArticlesObservable = new BehaviorSubject([])
    this.httpClient.get(`${environment.assetBaseURL}/code-articles.json`)
        .subscribe((data) => {
          this.codeArticlesObservable.next(<CodeArticle[]> data)
          this.logger.log('setupCodeArticles()', this.handleId, { data });
        }, (err) => {
          this.codeArticlesObservable.next([])
          this.logger.error('setupCodeArticles()', this.handleId, err);
      })
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
