import { Injectable } from '@angular/core';
import * as screenfull from 'screenfull';

import { IAppInitService } from '../core.types';

import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class FullScreenService implements IAppInitService {

  logHandle: string = 'FullScreenService';
  isFullscreen: boolean = false;
  isDeviceFullscreenMode: boolean;
  isLoaded: boolean = false;

  constructor(
    private logger: LogService,
  ) {
    // this.appOnInit(); // just in case
  }

  // for some reason, this isn't getting called on the mac
  appOnInit() {
    this.logger.log(`appOnInit()`, this.logHandle, {});
    if (!this.isLoaded && screenfull) {
      this.logger.log('Checking service for value.', 'FullScreenService', screenfull);
      // setup screenfull
      screenfull.on('error', event => {
        this.logger.error('Failed to enable fullscreen mode.', this.logHandle, event);
      });
      screenfull.on('change', () => {
        // this does not fire on apple
        this.isFullscreen = screenfull.isFullscreen;
        const modeName = (this.isFullscreen ? 'Fullscreen' : 'Normal').toLocaleUpperCase();
        this.logger.log(`Moving to ${modeName} mode.`, this.logHandle, event);
      });
      this.isLoaded = true;
    }
  }

  enterFullscreenMode() {
    this.appOnInit(); // just in case

    if (screenfull.enabled) {
      this.logger.log('Attempting to ENTER Fullscreen mode.', this.logHandle, event);
      screenfull.request();
    }
  }

  exitFullscreenMode() {
    this.appOnInit(); // just in case

    if (screenfull.enabled) {
      this.logger.log('Attempting to EXIT Fullscreen mode.', this.logHandle, event);
      screenfull.exit();
    }
  }

  toggleFullscreenMode() {
    this.isFullscreen ? this.exitFullscreenMode() : this.enterFullscreenMode();
  }
}
