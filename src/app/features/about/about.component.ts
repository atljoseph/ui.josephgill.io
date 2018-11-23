import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';
import { SoundService } from '../../core/services/sound.service';

interface IAbout {
  description?: string;
  src: string;
}

interface IAboutGroup {
  title: string;
  photos: IAbout[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  assetBaseDir: string = '../../../assets/images/resized';
  // https://medium.com/hceverything/applying-srcset-choosing-the-right-sizes-for-responsive-images-at-different-breakpoints-a0433450a4a3
  responsiveSizes: number[] = [640, 768, 1024, 1366, 1600, 1920];
  responsiveSizeFallback: number = 640;
  responsiveTestSrcs: string[] = [
    'candler-and-ngan.jpg', 
    'candler-umbrella-deer.jpg', 
    'brownie-monster.jpg', 
    'candler-trains-on-floor.jpg', 
    'candler-cracker-barrel.jpg', 
    'candler-glasses-laughing.jpg', 
  ];
  // aboutGroups: IAboutGroup[] = [
  //   {
  //     title: 'Candler:',
  //     photos: [
  //       { src: 'candler-bridge-pose-1.jpg' },
  //     ]
  //   },
  //   {
  //     title: 'Grandy & Papa:',
  //     photos: [
  //       { src: 'candler-grandy-papas-house.jpg' },
  //     ]
  //   },
  //   {
  //     title: 'Amy:',
  //     photos: [
  //       { src: 'amy-xinh-dep.jpg' },
  //     ]
  //   },
  //   {
  //     title: 'Daddy:',
  //     photos: [
  //       { src: 'daddy-looking-at-phone.jpg' },
  //     ]
  //   }
  // ];

  constructor(
    private header: HeaderService,
    private sound: SoundService
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
