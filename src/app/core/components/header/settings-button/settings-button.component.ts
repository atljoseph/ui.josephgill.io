import { Component, OnInit } from '@angular/core';

import { FullScreenService } from '../../../services/full-screen.service';
import { HeaderService } from '../../../services/header.service';
import { MenuService } from '../../../services/menu.service';
import { SoundService } from '../../../services/sound.service';
import { ContentService } from '../../../services/content.service';

import {
  menuButtonMargin,
  menuButtonDiameter
 } from '../../style.constants';

@Component({
  selector: 'app-core-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsButtonComponent implements OnInit {

  hover: boolean;
  showDropdownMenu: boolean = false;

  constructor(
    public header: HeaderService,
    public menu: MenuService,
    public sound: SoundService,
    public fullScreen: FullScreenService,
    public content: ContentService,
  ) { }


  ngOnInit() {
    this.content.clickContextObservable.subscribe((val) => {
      this.showDropdownMenu = false;
    });
  }

  scrollToTop() {
    this.showDropdownMenu = false;
    this.sound.play('punch-whack.mp3', 0.2);
    this.content.scrollSmoothToTop();
  }

  scrollToBottom() {
    this.showDropdownMenu = false;
    this.sound.play('punch-whack.mp3', 0.2);
    this.content.scrollSmoothToBottom();
  }

  scrollTick() {
    this.showDropdownMenu = false;
    this.sound.play('punch-whack.mp3', 0.2);
    this.content.scrollTick(1);
  }

  triggerResize() {
    this.showDropdownMenu = false;
    this.sound.play('punch-whack.mp3', 0.2);
    this.content.triggerResize();
  }


  toggleTheme() {
    this.showDropdownMenu = false;
    this.sound.play('punch-whack.mp3', 0.2);
    this.header.isTransparent = !this.header.isTransparent;
  }

  goFullscreen() {
    this.showDropdownMenu = false;
    this.sound.play('punch-whack.mp3', 0.2);
    this.fullScreen.toggleFullscreenMode();
  }

  onClickSettingsButton() {
    // this.sound.setVolume(0.2);
    // this.sound.play('punch-whack.mp3');
    this.showDropdownMenu = !this.showDropdownMenu;
  }

  get menuButtonLeftOffset(): string {
    // taken care of by animation
    // const offset = menuExposedWhenClosedWidth - (menuButtonDiameter/2);
    return `${menuButtonMargin}px`;
    // return `${0}px`;
  }

  get menuButtonTopOffset(): string {
    // const offset = (headerHeight - (menuButtonDiameter * 0.67));
    // return `${offset}px`;
    // return `${menuButtonMargin}px`;
    return `${0}px`;
  }

  get menuButtonDiameter(): string {
    return `${menuButtonDiameter}px`;
  }

  // get menuButtonIconDiameter(): string {
  //   return `${menuButtonDiameter * 2}px`;
  // }

  get menuButtonBorderRadius(): string {
    return '0px';
    // return '2px';
    // return `${menuButtonDiameter/2}px`;
  }

  get menuButtonIconFill():string {
    const teamBlue = '#3779e1';
    const light = 'silver';
    const normal = 'black';

    if (this.menu.isOpened) {
      if (!this.hover) {
        return teamBlue;
      }
      return normal;
    }
    else {
      if (this.hover) {
        return teamBlue;
      }
      return light;
    }
  }

}
