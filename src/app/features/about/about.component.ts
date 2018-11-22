import { Component, OnInit, OnDestroy } from '@angular/core';

import { HeaderService } from '../../core/services/header.service';
import { SoundService } from '../../core/services/sound.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

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

}
