import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren, ViewChild, ContentChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeaderService } from '../../../core/services/header.service';
import { ContentService } from '../../../core/services/content.service';
import { LogService } from 'src/app/core/services/log.service';
import { NavService } from 'src/app/core/services/navigation.service';

import { IPhoto, IPhotoGroup } from '../photo-albums.types';
import { PhotoAlbum } from '../photo-album.model';
import { photoAlbums, photoAlbumByKey } from '../photo-albums.data';

interface IPhotoAlbumParams {
  photoAlbumKey: string;
}

@Component({
  // selector: 'app-photo-album',
  templateUrl: './photo-album.component.html',
  styleUrls: ['./photo-album.component.scss']
})
export class PhotoAlbumComponent implements OnInit, OnDestroy {

  // // @ViewChildren('imgResponsive') images: QueryList<ElementRef>;
  // @ViewChild('imgResponsive', {read: ElementRef}) image: ElementRef;
  // @ViewChildren('imgResponsive', {read: ElementRef}) images: QueryList<ElementRef>;
  handleId: string = 'PhotoAlbumComponent';
  assetBaseDir: string = '../../../assets/images/resized';
  // https://medium.com/hceverything/applying-srcset-choosing-the-right-sizes-for-responsive-images-at-different-breakpoints-a0433450a4a3
  responsiveSizes: number[] = [640, 768, 1024, 1366];//, 1600, 1920];
  responsiveSizeFallback: number = 640;
  responsiveTestSrcs: string[] = [
    'candler-and-ngan.jpg', 
    'candler-umbrella-deer.jpg', 
    'brownie-monster.jpg', 
    'candler-trains-on-floor.jpg', 
    'candler-cracker-barrel.jpg', 
    'candler-glasses-laughing.jpg', 
  ];

  photoAlbum: PhotoAlbum;

  constructor(
    private header: HeaderService,
    private content: ContentService,
    private logger: LogService,
    private route: ActivatedRoute,
    private nav: NavService

  ) { 
    this.route.params.subscribe((params: IPhotoAlbumParams) => {
      const photoAlbumKey = params.photoAlbumKey;
      const data = photoAlbumByKey(params.photoAlbumKey);
      this.logger.log('route.params.subscribe()', this.handleId, { params, data });
      if (!data) return this.nav.go('photo-albums');
      else this.photoAlbum = new PhotoAlbum(data);
    });
  }

  ngOnInit() {
  
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
