import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

import { NavService } from '../../services/navigation.service';
import { LogService } from '../../services/log.service';
import { MenuService } from '../../services/menu.service';
import { HeaderService } from '../../services/header.service';
import { ScrollService } from '../../services/scroll.service';

import { RouterAnimation } from './content.animation';

import {
  headerHeight,
  menuExposedWhenClosedWidth
} from '../style.constants';

@Component({
  selector: 'app-core-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [RouterAnimation],
})
export class ContentComponent implements OnInit {

  constructor(
    public nav: NavService,
    public menu: MenuService,
    public header: HeaderService,
    public log: LogService,
    private scroll: ScrollService,
  ) { }

  ngOnInit() {
  }

  get appVersion() {
    return `v${environment.version}`;
  }

  get appEnvCode() {
    return environment.envCode;
  }

  get headerHeight(): string {
    return `${headerHeight}px`;
  }

  get menuWidthWhenClosed(): string {
    return `${menuExposedWhenClosedWidth}px`;
  }
}
