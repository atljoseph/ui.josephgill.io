import { Component, OnInit, OnDestroy, ElementRef, QueryList, ViewChildren, ViewChild, ContentChild } from '@angular/core';

import { HeaderService } from '../../../core/services/header.service';
import { ContentService } from '../../../core/services/content.service';
import { NavService } from 'src/app/core/services/navigation.service';

import { IPhoto, IPhotoGroup } from '../photo-albums.types';
import { PhotoAlbum } from '../photo-album.model';
import { photoAlbums } from '../photo-albums.data';

@Component({
  // selector: 'app-photo-albums',
  templateUrl: './photo-albums.component.html',
  styleUrls: ['./photo-albums.component.scss']
})
export class PhotoAlbumsComponent implements OnInit, OnDestroy {

  // // @ViewChildren('imgResponsive') images: QueryList<ElementRef>;
  // @ViewChild('imgResponsive', {read: ElementRef}) image: ElementRef;
  // @ViewChildren('imgResponsive', {read: ElementRef}) images: QueryList<ElementRef>;

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

  photoAlbums: PhotoAlbum[];

  constructor(
    private header: HeaderService,
    private content: ContentService,
    private nav: NavService
    ) { 
    this.photoAlbums = photoAlbums.map((albumData): PhotoAlbum => {
      return new PhotoAlbum(albumData);
    });
  }

  openAlbum(albumSelected: PhotoAlbum) {
    this.nav.go(`/photo-albums/${albumSelected.key.trim().toLowerCase()}`);
  }

  ngOnInit() {
    // console.log(this.images);
    // console.log(this.image);
    // setTimeout(() => {
    //   this.content.triggerResize();
    // }, 50);
    // this.content.scrollTick();
     // this.header.setTitle('Photos');
    //  console.log(PhotoAlbum);
    //  const test = new PhotoAlbum({ title: 'yes', photoGroups: [] });
    // this.photoAlbums = photoAlbums.map((albumData): PhotoAlbum => {
    //   return new PhotoAlbum(albumData);
    // });
    // this.photoAlbumSelected = this.photoAlbums.length > 0 ? this.photoAlbums[0] : null;
    //  console.log(this);
  }

  ngOnDestroy() {
    // this.header.clearTitle();
  } 

  albumTrackBy(index, album: PhotoAlbum) {
    return index + album.key;
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
