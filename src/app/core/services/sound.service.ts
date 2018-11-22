import { Injectable } from '@angular/core';
import { Howl, Howler } from 'howler';

import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  logHandle: string = 'SoundService';
  directory: string = '../../../assets/sounds';
  soundInstance: any;
  volume: number;

  constructor(
    private logger: LogService
  ) { }

  private playFile(filePath, volumeOverride?: number, delayOverride?: number) {
    let volume = volumeOverride || this.volume || 1;
    if (volume > 1 || volume < 0) volume = 1;
    this.logger.log('Playing file.', this.logHandle, { filePath, volume });
    this.soundInstance = new Howl({
      src: [filePath],
      autoplay: true,
      // loop: true,
      volume, 
      // onend: function() {
      //   // if (callback) callback();
      // }
    });
    this.soundInstance.play();
  }

  setVolume(volume: number) {
    this.volume = volume;
  }

  test() {
    this.play();
  }

  play(fileName?: string, volume?: number) {
    const file = fileName || 'spin-jump.mp3';
    const filePath = `${this.directory}/${file}`;
    this.playFile(filePath, volume);
  }
}
