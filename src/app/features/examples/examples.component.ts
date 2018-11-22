import { Component, OnInit } from '@angular/core';

import { SoundService } from '../../core/services/sound.service';

@Component({
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  constructor(
    public sound: SoundService
  ) { }

  ngOnInit() {
  }

  onFlipStart(event) {
    console.log(event);
    this.sound.play('neck-snap.mp3', 0.1);
  }

}
