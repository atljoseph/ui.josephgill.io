import { Component, OnInit } from '@angular/core';

import { MenuService } from '../../../services/menu.service';
import { SoundService } from '../../../services/sound.service';
import { HeaderService } from '../../../services/header.service';

import {
  menuButtonMargin,
  menuButtonDiameter
 } from '../../style.constants';
 
import { MenuButtonRotateAnimation } from './menu-button-rotate.animation';
import { 
  MenuButtonTranslateOpenCloseAnimation,
} from './menu-button-translate.animation';

@Component({
  selector: 'app-core-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss'],
  animations: [
    MenuButtonRotateAnimation,
    MenuButtonTranslateOpenCloseAnimation,
  ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuButtonComponent implements OnInit {

  hover: boolean;

  constructor(
    public menu: MenuService,
    public sound: SoundService,
    public header: HeaderService,
  ) { }


  ngOnInit() {
  }

  onClickMenuButton() {
    this.menu.toggle();
    this.sound.play('spin-jump.mp3', 0.2);
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
