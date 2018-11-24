import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';
import { ContentService } from '../../core/services/content.service';

interface IPhoto {
  description?: string;
  src: string;
}

interface IPhotoGroup {
  title: string;
  photos: IPhoto[];
}

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit, OnDestroy {

  assetBaseDir: string = '../../../assets/images/resized';
  // https://medium.com/hceverything/applying-srcset-choosing-the-right-sizes-for-responsive-images-at-different-breakpoints-a0433450a4a3
  responsiveSizes: number[] = [640, 768, 1024]; //, 1366, 1600, 1920
  responsiveSizeFallback: number = 640;
  responsiveTestSrcs: string[] = [
    'candler-and-ngan.jpg', 
    'candler-umbrella-deer.jpg', 
    'brownie-monster.jpg', 
    'candler-trains-on-floor.jpg', 
    'candler-cracker-barrel.jpg', 
    'candler-glasses-laughing.jpg', 
  ];
  photoGroups: IPhotoGroup[] = [
    {
      title: 'Candler:',
      photos: [
        { src: 'candler-umbrella-deer.jpg' },
        { src: 'candler-bridge-fist-up.jpg' },
        { src: 'brownie-monster.jpg' },
        { src: 'candler-bridge-pose-1.jpg' },
        { src: 'candler-bridge-pose-2.jpg' },
        { src: 'candler-bridge-pose-3.jpg' },
        { src: 'candler-glasses-laughing.jpg' },
        { src: 'candler-piano-alone.jpg' },
        { src: 'candler-piano-snoopy.jpg' },
        { src: 'candler-trains-on-floor.jpg' },
        { src: 'candler-train-sylvester.jpg' },
        { src: 'candler-cracker-barrel.jpg' },
      ]
    },
    {
      title: 'Grandy:',
      photos: [
        { src: 'candler-grandy-blowing-bubbles.jpg' },
        { src: 'candler-grandy-train-marietta.jpg' },
        { src: 'candler-grandy-cracker-barrel-1.jpg' },
        { src: 'candler-grandy-cracker-barrel-2.jpg' },
        { src: 'candler-grandy-swing.jpg' },
      ]
    },
    {
      title: 'Papa:',
      photos: [
        { src: 'candler-papa-train-agrirama.jpg' },
        { src: 'candler-papa-train-marietta.jpg' },
      ]
    },
    {
      title: 'Grandy & Papa:',
      photos: [
        { src: 'grandy-and-papa.jpg' },
        { src: 'candler-grandy-papas-house.jpg' },
      ]
    },
    {
      title: 'Amy & Family:',
      photos: [
        { src: 'amy-xinh-dep.jpg' },
        { src: 'candler-and-ngan.jpg' },
        { src: 'eva-ngan-amy-candler-uncle.jpg' },
        { src: 'eva-and-uncle.jpg' },
        { src: 'eva-and-grandfather.jpg' },
      ]
    },
    {
      title: 'Random:',
      photos: [
        { description: 'Eclipse 2017', src: 'eclipse-2017.jpg' },
      ]
    },
    {
      title: 'Daddy:',
      photos: [
        { src: 'daddy-looking-at-phone.jpg' },
      ]
    }
  ];

  constructor(
    private header: HeaderService,
    private content: ContentService
  ) { 
    // this.header.setTitle('Photos');
  }

  ngOnInit() {
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
