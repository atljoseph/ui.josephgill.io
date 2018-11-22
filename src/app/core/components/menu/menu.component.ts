import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { MenuService } from '../../services/menu.service';
import { HeaderService } from '../../services/header.service';
import { NavService } from '../../services/navigation.service';

import { 
  headerHeight, 
  menuWidthWhenOpened,
  menuButtonDiameter,
  menuButtonMargin
 } from '../style.constants';
 import { 
   menuOpenCloseAnimation,
 } from './menu.animation';

@Component({
  selector: 'app-core-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    menuOpenCloseAnimation,
  ],
  // CHANGE DETECTION OFF HERE FOR A REASON
  // changeDetection: ChangeDetectionStrategy.OnPush 
})
export class MenuComponent implements OnInit {

  constructor(
    public menu: MenuService,
    public header: HeaderService,
  ) { }

  ngOnInit() {
  }

  get envCode(): string {
    return environment.envCode;
  }

  get appVersion(): string {
    return `v${environment.version}`;
  }

  get menuWidthWhenOpened(): string {
    return `${menuWidthWhenOpened}px`;
  }

  get headerHeight(): string {
    return `${headerHeight}px`;
  }

  get titleMarginRight(): string {
    return `${menuButtonDiameter * 1 - menuButtonMargin}px`;
    // return `${menuButtonDiameter * 1.2 - menuButtonMargin}px`;
    // return `${menuButtonDiameter - menuButtonMarginHorizontal}px`;
  }

}
