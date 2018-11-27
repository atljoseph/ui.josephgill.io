import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren, ViewChild, ContentChild } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';
import { ContentService } from '../../core/services/content.service';

import { IPhoto, IPhotoGroup } from './photos.types';
import { photoGroups } from './photos.data';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {

  // // @ViewChildren('imgResponsive') images: QueryList<ElementRef>;
  // @ViewChild('imgResponsive', {read: ElementRef}) image: ElementRef;
  // @ViewChildren('imgResponsive', {read: ElementRef}) images: QueryList<ElementRef>;

  assetBaseDir: string = '../../../assets/images/resized';
  // https://medium.com/hceverything/applying-srcset-choosing-the-right-sizes-for-responsive-images-at-different-breakpoints-a0433450a4a3
  responsiveSizes: number[] = [640, 768, 1024];//, 1366, 1600, 1920];
  responsiveSizeFallback: number = 640;
  responsiveTestSrcs: string[] = [
    'candler-and-ngan.jpg', 
    'candler-umbrella-deer.jpg', 
    'brownie-monster.jpg', 
    'candler-trains-on-floor.jpg', 
    'candler-cracker-barrel.jpg', 
    'candler-glasses-laughing.jpg', 
  ];

  photoGroups = photoGroups;

  constructor(
    private header: HeaderService,
    private content: ContentService
  ) { 
    // this.header.setTitle('Photos');
  }

  ngOnInit() {
    // console.log(this.images);
    // console.log(this.image);
    // setTimeout(() => {
    //   this.content.triggerResize();
    // }, 50);
    // this.content.scrollTick();
  }

  ngOnDestroy() {
    // this.header.clearTitle();
  } 

  groupTrackBy(index, group: IPhotoGroup) {
    return index + group.title;
  }

  photoTrackBy(index, photo: IPhoto) {
    return index + photo.src;
  }

  imgSrcSet(imgSrc: string): string {
    // responsive image
    const srcs: string[] = this.responsiveSizes.map(size => {
      return `${this.assetBaseDir}/${size}/${imgSrc} ${size}w`;
    });
    return srcs.join(',');
  }

  imgSrcSetTest(): string {
    // responsive image
    const srcs: string[] = this.responsiveSizes.map((size, index) => {
      const imgSrc = this.responsiveTestSrcs[index];
      return `${this.assetBaseDir}/${this.responsiveSizeFallback}/${imgSrc} ${size}w`;
    });
    return srcs.join(',');
  }

  imgSrc(imgSrc: string): string {
    // fallback image
    return `${this.assetBaseDir}/${this.responsiveSizeFallback}/${imgSrc}`;
  }

  imgSrcTest(): string {
    // test image
    return `${this.assetBaseDir}/${this.responsiveSizeFallback}/${this.responsiveTestSrcs[0]}`;
  }

}
