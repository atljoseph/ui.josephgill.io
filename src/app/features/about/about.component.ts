import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';
import { SoundService } from '../../core/services/sound.service';
import { NavService } from '../../core/services/navigation.service';

import { IAbout, IAboutGroup } from './about.types';
import {
  aboutData,
  imgSrc, imgSrcTest,
  imgSrcSet, imgSrcSetTest
 } from './about.utils';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutGroups = aboutData;

  constructor(
    private header: HeaderService,
    private sound: SoundService,
    public nav: NavService
  ) { 
  }

  ngOnInit() {
  }

  play() {
    this.sound.play('train-hits-guy.mp3', 1);
  }

  groupTrackBy(index, group: IAboutGroup) { return index + group.title; }

  photoTrackBy(index, photo: IAbout) { return index + photo.src; }

  imgSrcSet(src: string): string { return imgSrcSet(src); }

  imgSrcSetTest(src:string): string { return imgSrcSetTest(src); }

  imgSrc(src: string): string { return imgSrc(src);}

  imgSrcTest(src: string): string { return imgSrcTest(src); }

}
