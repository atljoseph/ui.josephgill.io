import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveImageService {

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

  // ##############################

  constructor() { }
}
