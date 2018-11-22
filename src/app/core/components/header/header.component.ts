import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { NavService } from '../../services/navigation.service';
import { MenuService } from '../../services/menu.service';
import { HeaderService } from '../../services/header.service';
import { SoundService } from '../../services/sound.service';
import { 
  headerHeight, 
  menuExposedWhenClosedWidth,
  menuButtonDiameter,
  menuButtonMargin
 } from '../style.constants';

@Component({
  selector: 'app-core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  hoverDomain: boolean;

  constructor(
    private nav: NavService,
    public menu: MenuService,
    public header: HeaderService,
    public sound: SoundService,
  ) { }

  ngOnInit() {
  }

  get menuWidthWhenClosed(): string {
    return `${menuExposedWhenClosedWidth}px`;
  }

  get headerHeight(): string {
    return `${headerHeight}px`;
  }

  get headerLinksLeftRightMargin(): string {
    return `${(menuButtonDiameter * 1) + menuButtonMargin}px`;
    // return `${menuButtonDiameter * 1.25}px`;
  }

  get sunSize(): string {
    return `${headerHeight - 5}px`;
  }
}
