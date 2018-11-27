import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';
import { SoundService } from '../../core/services/sound.service';
import { NavService } from '../../core/services/navigation.service';

import { IAbout, IAboutGroup } from './about.types';
import { aboutGroups } from './about.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

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
  aboutGroups = aboutGroups;

  constructor(
    private header: HeaderService,
    private sound: SoundService,
    public nav: NavService
  ) { 
    // this.header.setTitle('About');
  }

  ngOnInit() {
  }

  play() {
    this.sound.play('train-hits-guy.mp3', 1);
  }

  ngOnDestroy() {
    // this.header.clearTitle();
  }

  groupTrackBy(index, group: IAboutGroup) {
    return index + group.title;
  }

  photoTrackBy(index, photo: IAbout) {
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
