import { Component, OnInit } from '@angular/core';

import { SoundService } from 'src/app/core/services/sound.service';
import { NavService } from 'src/app/core/services/navigation.service';
import { ResponsiveImageService } from 'src/app/core/services/responsive-image.service';

import { IAbout, IAboutGroup } from './about.types';
import {
  aboutData,
 } from './about.utils';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutGroups = aboutData;

  constructor(
    private sound: SoundService,
    public nav: NavService,
    public responsiveImage: ResponsiveImageService,
  ) { 
  }

  ngOnInit() {
  }

  play() {
    this.sound.play('train-hits-guy.mp3', 1);
  }

  groupTrackBy(index, group: IAboutGroup) { return index + group.title; }

  photoTrackBy(index, photo: IAbout) { return index + photo.src; }

}
